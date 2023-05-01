// Functions

// 1. Function Declaration

function sayHello(name) {
  console.log("Hello " + name + "!");
}
// sayHello("Yana");

// 2. Function Expression
const sayHello2 = function (name) {
  console.log("Hello " + name + "!");
};
// sayHello2("Jennifer");

// 3. Arrow Functions
const add = (a, b) => a + b; // Implicitly returns
// console.log(add(3, 8));

const sayHi = (name) => "Hello " + name + "!";
// sayHi("Michael"); // returns "Michael" but won't be diplayed in console

const add2 = (a, b) => {
  return a + b;
};

// console.log(add(10, 5));

function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}
// console.log(areBothEven(5, 6));

//Exercises

// 1.
function computeArea(width, height) {
  let area = width * height;
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
}
// console.log(computeArea(4, 5));

// 2.
const planetHasWater = function (planet) {
  if (planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars") {
    return true;
  } else {
    return false;
  }
};

// console.log(planetHasWater("MaRs"));

// 1. Arguments
// let maria = getDevObject("Maria", "HTML", "CSS", "JavaScript", "jQuery");

function getDevObject(name) {
  let skills = [];
  console.log(arguments[0]);
  for (let i = 1; i < arguments.length; i++) {
    skills.push(arguments[i]);
  }
  return {
    devName: name,
    jobSkills: skills,
  };
}
// console.log(maria);

// 2. Rest Params

function getDevObject2(name, ...skills) {
  console.log(skills);
  return {
    devName: name,
    jobSkills: skills,
  };
}

// getDevObject2("Annson", "coder", "developer", "javascript", "HTML");

// Default Parameters
function setColor(bicycle, color = "purple") {
  bicycle.color = color;
}
const harley = {};
// console.log(harley);
setColor(harley, "Black");
// console.log(harley);

//Passing an Anonymous Function

var colors = ["red", "green", "blue"];

// colors.forEach(function (color) {
//   console.log(color);
// });

// colors.forEach((color) => {
//   console.log(color);
// });

function foo() {
  let b = 0;

  function bar() {
    console.log(b);
  }
  bar();
}
foo();

let c = "hi";

// if (true) {
//   let c = 10;
//   console.log(c);
// }

// console.log(c);

// IIFE
// Immediatly Invoked Function Expression

// (function () {
//   console.log("I'm running without a proper call");
// })();

// Block Scope
function varTest() {
  var x = 1;
  if (true) {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}
