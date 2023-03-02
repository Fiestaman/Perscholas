// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
function missingSheep(array) {
  let numTrue = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      numTrue++;
    }
  }
  return numTrue;
}
console.log(
  missingSheep([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

// 2.
// Define a function declaration
// Given an array of numbers find the average of the all numbers.
// [1,2, 3, 4, 5, 6] ==> 3.5
// ==> returns 3.5

function findAverage(arrayOfNums) {
  let avg = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    avg += arrayOfNums[i];
  }
  avg = (avg / arrayOfNums.length).toFixed(2);
  return +avg;
}

function findAverage2(nums) {
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  let avg = (sum / nums.length).toFixed(2);
  return +avg;
}

console.log(findAverage([1, 8, 3, 17, 5, 6]));
console.log(findAverage2([1, 8, 3, 17, 5, 6]));
