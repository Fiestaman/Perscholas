const { Schema, model } = require("mongoose");
const destinationsSchema = require("./Destinations");

const flightsSchema = new Schema(
  {
    airline: { type: String, enum: ["American", "Southwest", "United"] },
    flightNo: { type: Number, required: true, min: 10, max: 9999 },
    departs: {
      type: Date,
      default: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    },
    airport: {
      type: String,
      enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
      default: "SAN",
    },
    destinations: [destinationsSchema],
  },
  { timestamps: true }
);

const Flights = model("Flights", flightsSchema);

module.exports = Flights;
