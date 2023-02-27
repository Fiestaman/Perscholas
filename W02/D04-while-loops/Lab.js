// Write a while loop for the given output:
//  10, 30, 50, 70, 90
//  20, 40, 60, 80, 100

// - This could be acheived a few ways, be creative.
let arrA = [];
let a = 10;
while (a <= 90) {
  arrA.push(a);
  a += 20;
}
console.log(arrA.join(", "));

let arrB = [];
let b = 20;
while (b <= 100) {
  arrB.push(b);
  b += 20;
}
console.log(arrB.join(", "));

// Write a while loop that prints all numbers from 500 - 800 only if they are divisible by 4.

b = 500;
while (b <= 800) {
  if (b % 4 === 0) {
    console.log(b);
  }
  b++;
}
