// Array.every() method: The Array.every() method in JavaScript is used to check whether all the elements of the array satisfy the given condition or not.
//Devin
function aboveTwentyOne(age) {
  return age >= 21;
}
let array = [23, 21, 40, 30];
console.log(array.every(aboveTwentyOne));
//-----> true
//The every() method will return true if all predicates are true
//Arwa
function isAEmail(email = "") {
  return email.includes("@");
}
let emails = ["something@gmail.com", "email@gmail.com", "yahoo@gmail.com"];
console.log(emails.every(isAEmail));
//-----> true
///This method does not change the original array
//The every() method will return false if all predicates are true
//Lauren
function isNumber(num) {
  if (typeof num === "number") {
    return true;
  }
}
let nums = [2, 4, 6, 10, 40, true];
console.log(nums.every(isNumber));
//-----> false
console.log([].every(aboveTwentyOne));
//-----> true
