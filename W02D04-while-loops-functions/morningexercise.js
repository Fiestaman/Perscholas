let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// Example output:
// 276 + 351 = 627
let arr_1total = 0;
let arr_2total = 0;

for (let item of arr_1) {
  arr_1total += item;
}

for (let item of arr_2) {
  arr_2total += item;
}

let total = arr_1total + arr_2total;
console.log(total);

//
//

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output:
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line

for (let i = 0; arr.length > 0; i++) {
  console.log(arr.pop());
}

// for (let i = arr.length - 1; 1 >= 0; i--) {
//   console.log(arr[i]);
// }
