// add .env variables to process.env
require("dotenv").config();

const { connect, connection } = require("mongoose");
const express = require("express");
const app = express();

// Set listening port
const PORT = process.env.PORT || 3000;
const methodOverride = require("method-override");

const logsController = require("./controllers/logsController");
const foodLogsController = require("./controllers/foodlogsController");

// Database connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.once("open", () => {
  console.log("connected to mongo");
});

// View Engine Middleware Configure
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);

// Set default file extension
app.set("view engine", "jsx");

// Set render default location
app.set("views", "./views");

//
// Middleware
//

// Process url
app.use(express.urlencoded({ extended: false }));

// Set query parameter for method override
app.use(methodOverride("_method"));

// Set static assets default location
app.use(express.static("public"));

// Load controller for logs routes
app.use("/logs", logsController);

// Load controller for foodlogs routes
app.use("/foodlogs", foodLogsController);

app.get("/foodlog/*", (req, res) => {
  res.redirect("/foodlogs");
});

app.get("/*", (req, res) => {
  res.redirect("/logs");
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
