const { Schema, model } = require("mongoose");

const destinationsSchema = new Schema(
  {
    airport: { type: String, enum: ["AUS", "DAL", "LAX", "SAN", "SEA"] },
    arrival: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Destinations = model("Destinations", destinationsSchema);

module.exports = destinationsSchema;
