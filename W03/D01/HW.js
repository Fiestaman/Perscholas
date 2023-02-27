// 1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(num1, num2) {
  if (num1 == num2) {
    return num1;
  } else if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maxOfTwoNumbers(4, 3));

// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = function (num1, num2, num3) {
  if (num1 >= num2) {
    if (num1 >= num3) {
      return num1;
    } else {
      return num3;
    }
  } else {
    if (num2 >= num3) {
      return num2;
    } else {
      return num3;
    }
  }
};
console.log(maxOfThree(2, 3, 1));

// 3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(letter) {
  if (
    letter.toLowerCase() == "a" ||
    letter.toLowerCase() == "e" ||
    letter.toLowerCase() == "i" ||
    letter.toLowerCase() == "o" ||
    letter.toLowerCase() == "u"
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(isCharAVowel("E"));

// 4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
const sumArray = function (numArray) {
  let sum = 0;
  for (i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
};
console.log(sumArray([2, 4, 5]));

// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
function multiplyArray(numArray) {
  product = 1;
  for (i = 0; i < numArray.length; i++) {
    product *= numArray[i];
  }
  return product;
}
console.log(multiplyArray([2, 4, 5]));

// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
const numArgs = function (...args) {
  return args.length;
};
console.log(numArgs("one", "two", 3, "four"));

// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
function reverseString(string) {
  let reverseString = "";
  for (i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return reverseString;
}
console.log(reverseString("rockstar"));

// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
const longestStringInArray = function (stringArray) {
  let arrayLengths = [];
  for (i = 0; i < stringArray.length; i++) {
    arrayLengths.push(stringArray[i].length);
  }
  arrayLengths.sort();
  return arrayLengths[arrayLengths.length - 1];
};
console.log(longestStringInArray(["a", "abdkfj", "asdfg", "abc"]));

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
function stringsLongerThan(arrayStrings, num) {
  let newArray = [];
  for (i = 0; i < arrayStrings.length; i++) {
    if (arrayStrings[i].length > num) {
      newArray.push(arrayStrings[i]);
    }
  }
  return newArray;
}
console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));
