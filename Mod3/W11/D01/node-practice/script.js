const axios = require("axios");

const fs = require("fs");
// daysOfWeek variable is equal to whatever module.exports is on the days=of-week file
// node will run the days-of-week file before returning the exports
const daysOfWeek = require("./days-of-week");

fs.writeFile("./hello.txt", "Hello!", () => {
  console.log("done creating file");
});

let day = daysOfWeek.getWeekDay(5);
console.log(day);

axios.get("http://jsonplaceholder.typicode.com/users").then((response) => {
  console.log(response.data);
});
