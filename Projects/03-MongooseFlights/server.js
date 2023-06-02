const flights = require("./config/database.js");
const PORT = process.env.PORT || 3000;
const Destinations = require("./models/Destinations.js");
const Flights = require("./models/Flights.js");
const express = require("express");
const app = express();
const methodOverride = require("method-override");

// View Engine Middleware Configure
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set("view engine", "jsx");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/flights", async (req, res) => {
  try {
    const foundFlights = await Flights.find({});
    res.status(200).render("./Index", { flights: foundFlights });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/flights/new", (req, res) => {
  res.render("./New");
});

app.put("/flights/:id", async (req, res) => {
  try {
    req.body.arrival = new Date(req.body.arrival);
    await Flights.findByIdAndUpdate(
      req.params.id,
      { $push: { destinations: { ...req.body } } },
      { upsert: true, new: true }
    );
    res.redirect(`/flights/${req.params.id}`);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/flights", async (req, res) => {
  try {
    req.body.departs = new Date(req.body.departs);
    await Flights.create({ ...req.body });
    res.redirect("/flights");
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/flights/:id", async (req, res) => {
  try {
    const foundFlight = await Flights.findById(req.params.id).populate();
    res.render("./Show", {
      flight: foundFlight,
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
