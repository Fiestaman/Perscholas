const { Schema, model } = require("mongoose");

const foodLogSchema = new Schema(
  {
    entree: String,
    drink: String,
    mealTime: { type: String, enum: ["breakfast", "lunch", "dinner"] },
  },
  { timestamps: true }
);

const Log = model("FoodLog", foodLogSchema);

module.exports = Log;
