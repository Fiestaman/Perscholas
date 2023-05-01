//.some() method in JS
// Works for arrays
// Takes a function as its argument
// What this function is for?
// To tests whether at least one element in the array passes the test
/**
It returns a Boolean value indicating whether at least one element in the array satisfies the condition specified by the callback function
Parameters: This method accepts five parameters as mentioned above and described below:
callback: This parameter holds the function to be called for each element of the array.
element: The parameter holds the value of the elements being processed currently.
index: This parameter is optional, it holds the index of the currentValue element in the array starting from 0.
array: This parameter is optional, it holds the complete array on which Array.every is called.
thisArg: This parameter is optional, it holds the context to be passed as this is to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.
Return value: This method returns true even if one of the elements of the array satisfies the condition(and does not check the remaining values) implemented by the argument method. If no element of the array satisfies the condition then it returns false.
*/
const numbers = [1, 3, 5, 7, 8, 9];
const hasEvenNumber = numbers.some(function (num) {
  return num % 2 === 0;
});
console.log(hasEvenNumber); // true
// =============================================================
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const hasUserWithAge30 = users.some(function (user) {
  return user.age === 30;
});
console.log(hasUserWithAge30); // true
// =============================================================
function checkAvailability(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
}
function func() {
  // Original function
  var arr = [2, 5, 8, 1, 4];
  // Checking for condition
  console.log(checkAvailability(arr, 2));
  console.log(checkAvailability(arr, 87));
}
func();
