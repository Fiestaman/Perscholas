const express = require("express");
const app = express();
const port = 3000;

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

app.get("/fixed/:indexOfPlantsArray", (req, res) => {
  if (plants[req.params.indexOfPlantsArray]) {
    res.send(plants[req.params.indexOfPlantsArray]);
  } else {
    res.send(
      "cannot find anything at this index: " + req.params.indexOfPlantsArray
    );
  }
});

app.listen(port, () => {
  console.log("listening on port", port);
});
