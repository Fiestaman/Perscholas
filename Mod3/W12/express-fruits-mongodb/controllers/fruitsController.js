const express = require("express");
const router = express.Router();
const Fruit = require("../models/Fruit");

router.get("/seed", async (req, res) => {
  await Fruit.create([
    {
      name: "grapefruit",
      color: "pink",
      readyToEat: true,
    },
    {
      name: "grape",
      color: "purple",
      readyToEat: false,
    },
    {
      name: "avocado",
      color: "green",
      readyToEat: true,
    },
  ]);
  res.redirect("/fruits");
});

// I.N.D.U.C.E.S
// ==============
// Index
router.get("/", async (req, res) => {
  console.log("Index Controller Func. running...");
  try {
    const foundFruit = await Fruit.find({});
    res.status(200).render("fruits/Index", { fruits: foundFruit });
  } catch (e) {
    res.status(400).send(err);
  }
});

// New // renders a form to create a new fruit
router.get("/new", (req, res) => {
  res.render("fruits/New");
});

// Delete // receives the id of the fruit document and deletes it
router.delete("/:id", async (req, res) => {
  try {
    await Fruit.findByIdAndDelete(req.params.id);
    // redirect is making a GET request to whatever path you specify
    res.redirect("/fruits");
  } catch (e) {
    res.status(400).send(e);
  }
});

// Update // PUT
router.put("/:id", async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === "on";
    const updatedFruit = await Fruit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    // redirect is making a GET request to whatever path you specify
    res.redirect(`/fruits/${req.params.id}`);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Create // receives info from new route to then create a new fruit w/ it
router.post("/", async (req, res) => {
  try {
    req.body.readyToEat = req.body.readyToEat === "on";
    const newFruit = await Fruit.create(req.body);
    //console.log(fruits);
    // redirect is making a GET request to whatever path you specify
    res.redirect("/fruits");
  } catch (e) {
    res.status(400).send(e);
  }
});

// Edit //
router.get("/:id/edit", async (req, res) => {
  try {
    const foundFruit = await Fruit.findById(req.params.id);
    res.render("fruits/Edit", {
      fruit: foundFruit,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show
router.get("/:id", async (req, res) => {
  try {
    const foundFruit = await Fruit.findById(req.params.id);
    res.render("fruits/Show", {
      //second param must be an object
      fruit: foundFruit,
      //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
