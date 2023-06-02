require("dotenv").config();
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
require("./config/database");

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// Check if token and create req.user
app.use(require("./config/checkToken"));

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));
// Protect the API routes below from anonymous users
const ensureLoggedIn = require("./config/ensureLoggedIn");
app.use("/api/items", ensureLoggedIn, require("./routes/api/items"));
app.use("/api/orders", ensureLoggedIn, require("./routes/api/orders"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Express app listen
app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
