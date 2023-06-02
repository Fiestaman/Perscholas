const express = require("express");
const router = express.Router();

// Load FoodLog model for mongoose
const FoodLog = require("../models/FoodLog");

//
// Routes
//

// Seed
router.get("/seed", async (req, res) => {
  await FoodLog.insertMany([
    { entree: "Ham and Eggs", drink: "Tea", mealTime: "breakfast" },
    {
      entree: "Peanut Butter and Jelly Sandwich",
      drink: "Water",
      mealTime: "lunch",
    },
    { entree: "Dried Fish", drink: "Rum", mealTime: "dinner" },
    { entree: "Biscuits and Gravy", drink: "Tea", mealTime: "breakfast" },
  ]);
  res.redirect("/foodlogs");
});

// Index
router.get("/", async (req, res) => {
  try {
    const foundLogs = await FoodLog.find();
    console.log(foundLogs);
    res.render("./foodlogs/Index", { logs: foundLogs });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New
router.get("/new", (req, res) => {
  res.render("./foodlogs/New");
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await FoodLog.findByIdAndDelete(req.params.id);
    res.redirect("/foodlogs");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === "on";
    await FoodLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect("/foodlogs");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === "on";
    await FoodLog.create(req.body);
    res.status(200).redirect("/foodlogs");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit
router.get("/:id/edit", async (req, res) => {
  try {
    const foundLog = await FoodLog.findById(req.params.id);
    res.render("./foodlogs/Edit", { log: foundLog });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show
router.get("/:id", async (req, res) => {
  try {
    const foundLog = await FoodLog.findById(req.params.id);
    res.status(200).render("./foodlogs/Show", { log: foundLog });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
