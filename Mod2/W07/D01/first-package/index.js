const math = require("./utilities/add");
const cowsay = require("cowsay");

const sum = math.add(10, 4);
const diff = math.subtract(10, 5);

// console.log(sum);
// console.log(diff);
console.log(
  cowsay.say({
    text: `sum: ${sum} | diff: ${diff}`,
    e: "oO",
    T: "U ",
  })
);
