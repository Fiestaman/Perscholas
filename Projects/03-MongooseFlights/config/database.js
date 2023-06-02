// add env variables to process.env
require("dotenv").config();

// Dependencies
const mongoose = require("mongoose");

// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// setTimeout(() => {
//   db.close();
// }, 5000);

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected"));
db.on("close", () => console.log("mongo disconnected"));
