const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected"));
db.on("connected", () => {
  console.log(`Connected to ${db.name}`);
});
db.on("close", () => console.log("mongo disconnected"));
