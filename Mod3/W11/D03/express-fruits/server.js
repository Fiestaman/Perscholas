const express = require("express");
const app = express();
const fruits = require(`./models/fruits`);
const vegetables = require(`./models/vegetables`);

// This line tells the render method the default file extension to look for.
app.set("view engine", "jsx");

// This line sets the render method's default location to look for a jsx file to
// render. Without this line of code we would have to specific the views
// directory everytime we use the render method
// defaults to views folder
app.set("views", "./views");

app.engine("jsx", require("jsx-view-engine").createEngine());

// Custom middleware
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("I run for all the routes");
  next();
});

// I.N.D.U.C.E.S.
// Index (route)
// New (route)
// Delete (verb)
// Update (verb)
// Create (verb)
// Edit (route)
// Show (route)

app.get("/fruits", function (req, res) {
  console.log("Index Controller function running...");
  res.render("./fruits/Index", { fruits: fruits });
});

//put this above your Show route
app.get("/fruits/new", (req, res) => {
  res.render("./fruits/New");
});

app.post("/fruits", (req, res) => {
  req.body.readyToEat = req.body.readyToEat === "on";
  fruits.push(req.body);
  //   res.send("data received and created");
  res.redirect("/fruits");
});

//add show route
app.get("/fruits/:id", function (req, res) {
  res.render("./fruits/Show", {
    //second param must be an object
    fruit: fruits[req.params.id], //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
});

app.get("/vegetables", function (req, res) {
  res.render("./vegetables/Index", { vegetables: vegetables });
});

//add show route
app.get("/vegetables/:id", function (req, res) {
  res.render("./vegetables/Show", {
    //second param must be an object
    vegetable: vegetables[req.params.id],
  });
});

//put this above your Show route
app.get("/vegetables/new", (req, res) => {
  res.render("./vegetables/New");
});

app.post("/vegetables", (req, res) => {
  req.body.readyToEat = req.body.readyToEat === "on";
  vegetables.push(req.body);
  //   res.send("data received and created");
  res.redirect("/vegetables");
});

app.listen(3000, () => {
  console.log("listening");
});
