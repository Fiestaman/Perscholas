function minusOne(num) {
  if (typeof num == "number") {
    return num - 1;
  } else {
    return num;
  }
}
// console.log(minusOne("infinity"));

function makeSentence(s1, s2, s3) {
  console.log(`Hello ${s1}, here are the ${s2} ${s3} that you ordered.`);
}

// makeSentence("Jenny", "blue", "pants");
