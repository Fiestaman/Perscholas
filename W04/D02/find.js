//       Array Method .find()   //
// The find() method returns the value of the first element that passes a test.
// TODO: Example1: find() method to find a positive number.
// Input array contain some elements.
let array = [-10, -0.2, 0.3, -40, -50];
// Method (return element > 0).
let found = array.find(function (e) {
  return e > 0;
});
// Printing desired values.
console.log(found); // Expected output: 0.3
// TODO: Example 2:
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found);  // Expected output: 12
// ? How does array.find() work ?
//The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.
// TODO: Example 3: finding the first object that matches a specific property:
const users = [
  { name: "Alice", age: 35 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const foundUser = users.find((user) => user.name === "Bob");
console.log(foundUser); // Expected output: {name: "Bob", age: 30}
// References:
// https://www.w3schools.com/jsref/jsref_find.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://www.geeksforgeeks.org/javascript-array-find-method/
// Jacqueline Barragan-Lomeli, Nicolas Davis, Blake Zaide, Jeffrey Lim
