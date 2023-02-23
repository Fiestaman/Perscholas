// Conditionals and If statements

// Operators
// === - strictly equals, compares value and datatype
// == loose equals, only compares value
// > - greater than
// < - less than
// <= - less than or equal to
// >= - greater than or equal to
// && - AND
// || - OR
// != - loose not equal
// !== - strict not equal

// Exercises:

// 1.
let num = 0;
if (num > 0) {
  // this will execute if conditional is true
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  // this will execute if conditionals are false
  console.log("Number is neither positive nor negative.");
}

// 2. example of loose equals vs strick
let x = "10";

// if (x == 10)
if (x === 10) {
  console.log("That is true!");
} else {
  console.log("That is false.");
}

// 3.
let age = 22;
if (age >= 18) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

// 4.
let val = 100;
if (val > 0) {
  if (val > 100) {
    console.log("Number is positive and greater than 100.");
  } else if (val < 100) {
    console.log("Number is positive but less than 100.");
  } else {
    console.log("Number is 100.");
  }
} else {
  console.log("Number is negative.");
}

// 5.
let grade = 95;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 55) {
  console.log("D");
} else {
  console.log("F");
}
