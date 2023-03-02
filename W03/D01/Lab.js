/*
Challenge: addList

=======Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as arguments,
  adds them together and returns the resulting sum.
- Assume all parameters will be numbers. <=========
- If called with no arguments, return 0 (zero).

Examples:

addList(1) //=> 1
addList(1,50,1.23) //=> 52.23
addList(7,-12) //=> -5

*/

// Your solution for 01-addList here:
function addList(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log(addList(1, 2, 3, 4, 5));
console.log(addList(1)); //=> 1
console.log(addList(1, 50, 1.23)); //=> 52.23
console.log(addList(7, -12)); //=> -5
console.log(addList());
