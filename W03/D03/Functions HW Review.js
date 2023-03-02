// Functions HW Review

// 2.
const maxOfThree = (x, y, z) => {
  if (x > y && x > z) {
    return x;
  } else if (y > z) {
    return y;
  } else {
    return z;
  }
};

console.log(maxOfThree(130, 140, 130));

// 8.

const longestStringInArray = (strArr) => {
  let longest = strArr[0].length;
  // function forTheForEach(str) {
  //   if (str.length > longest) {
  //     longest = str.length;
  //   }
  // }
  // strArr.forEach(forTheForEach);
  strArr.forEach((str) => {
    if (str.length > longest) {
      longest = str.length;
    }
  });
  return longest;
};

console.log(
  longestStringInArray([
    "hello",
    "morning",
    "javascript",
    "coding",
    "aplsdfja;slkdjfplkasdjfakljsd;hjfakl;sjfhas     ",
  ])
);

// 3.
function isCharAVowel(char) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  // return vowels.includes(char.toLowerCase());
  for (let ele of vowels) {
    if (ele === char.toLowerCase()) {
      return true;
    }
  }
  return false;
}

console.log(isCharAVowel("a"));

// 9
function stringsLongerThan(arr, num) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      resultArr.push(arr[i]);
    }
  }

  if (resultArr.length) {
    return resultArr;
  } else {
    return "No strings found";
  }
}

console.log(
  stringsLongerThan(["a;lksdjfsadf", "hello", "in", "the", "morning"], 5)
);
