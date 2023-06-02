const express = require("express");
const router = express.Router();

// Load Log model for mongoose
const Log = require("../models/Log");

//
// Routes
//

// Seed
router.get("/seed", async (req, res) => {
  await Log.insertMany([
    { title: "First log", entry: "We set sail!", shipIsBroken: false },
    { title: "Day 2", entry: "Morale is high.", shipIsBroken: false },
    {
      title: "Day 3",
      entry: "We spotted another merchant vessel.",
      shipIsBroken: false,
    },
  ]);
  res.redirect("/logs");
});

// Index
router.get("/", async (req, res) => {
  try {
    const foundLogs = await Log.find();
    res.render("./logs/Index", { logs: foundLogs });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New
router.get("/new", (req, res) => {
  res.render("./logs/New");
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Log.findByIdAndDelete(req.params.id);
    res.redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === "on";
    await Log.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === "on";
    await Log.create(req.body);
    res.status(200).redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit
router.get("/:id/edit", async (req, res) => {
  try {
    const foundLog = await Log.findById(req.params.id);
    res.render("./logs/Edit", { log: foundLog });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show
router.get("/:id", async (req, res) => {
  try {
    const foundLog = await Log.findById(req.params.id);
    res.status(200).render("./logs/Show", { log: foundLog });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
