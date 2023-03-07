function minusOne(num) {
  console.log(num - 1);
}
minusOne(10);
minusOne(100);
minusOne(Infinity);

function makeSentence(s1, s2, s3) {
  console.log("Oh boy, do " + s1 + " " + s2 + " " + s3 + " or what?");
}

makeSentence("I", "want", "chimichangas");

function getLastElement(arr) {
  console.log(arr[arr.length - 1]);
}
getLastElement([1, 2, 3, 4, 5, 6]);
getLastElement(["a", "b", "c"]);
getLastElement([
  [1, 2, 3],
  [4, 5, 6],
]);
