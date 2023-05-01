// 1. Define a function, as a function declaration, maxOfTwoNumbers
// that takes two numbers as arguments and returns the largest
// of them. If they are the same, return that number. Use the if-else construct
// or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
  return x >= y ? x : y;
}
// O(1)
console.log(maxOfTwoNumbers(3, 9));

// 2. Define a function, as a function expression, maxOfThree that takes three
// numbers as arguments and returns the largest of them. Again, the
// Math.max method is not allowed.
const maxOfThree = (a, b, c) => {
  if (a >= b) {
    if (a >= c) {
      return a;
    } else {
      return c;
    }
  } else {
    if (b >= c) {
      return b;
    } else {
      return c;
    }
  }
};
// O(1)
console.log(maxOfThree(3, 5, 4));

// 3. Define a function, as a function declaration, isCharAVowel that takes a
// character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(c) {
  return (
    c.toLowerCase() == "a" ||
    c.toLowerCase() == "e" ||
    c.toLowerCase() == "i" ||
    c.toLowerCase() == "o" ||
    c.toLowerCase() == "u"
  );
}
// O(1)
console.log(isCharAVowel("E"));

// 4. Define a function, as a function expression, sumArray that takes an array
// of numbers and returns the sum of those numbers. For example,
// sumArray([2, 4, 5]);would return 11.
const sumArray = (arr) => {
  let sum = 0;
  arr.forEach((i) => (sum += i));
  return sum;
};
// O(n)
console.log(sumArray([2, 4, 5]));

// 5. Define a function, as a function declaration, multiplyArray that takes an
// array of numbers and returns the product those numbers. For example,
// multiplyArray([2, 4, 5]); would return 40.
function multiplyArray(arr) {
  let sum = 1;
  arr.forEach((i) => (sum *= i));
  return sum;
}
// O(n)
console.log(multiplyArray([2, 4, 5]));

// 6. Define a function, as a function expression, numArgs that returns the
// number of arguments passed to the function when called.
const numArgs = (...arr) => {
  return arr.length;
};
// O(n)
console.log(numArgs(1, 2, 3, "a", "b", "c"));

// 7. Define a function, as a function declaration, reverseString that takes a
// string, reverses the characters, and returns it. For example,
// reverseString('rockstar'); would return the string "ratskcor".
function reverseString(str) {
  return [...str].reverse().join("");
}
// O(n)
console.log(reverseString("rockstar"));

// 8. Define a function, as a function expression, longestStringInArray that
// takes an array of strings as an argument and returns the length of the
// longest string.
const longestStringInArray = (arr) => {
  let lengths = [];
  arr.forEach((str) => lengths.push(str.length));
  return lengths.sort()[lengths.length - 1];
};
// O(n log n)
console.log(longestStringInArray(["assd", "df", "eggew", "asdfew", "dke"]));

// 9. Define a function, as a function declaration, stringsLongerThan that takes
// an array of strings and a number as arguments; and returns an array of the
// strings that are longer than the number passed in. For example,
// stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);
// would return ["hello", "morning"].
function stringsLongerThan(arr, num) {
  return arr.filter((str) => str.length > num);
}
// O(n)
console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));
