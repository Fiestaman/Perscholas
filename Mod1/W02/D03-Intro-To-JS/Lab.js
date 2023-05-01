let grade = 95;
if (grade >= 80) {
  console.log("You did a good job");
} else if (grade >= 70) {
  console.log("Keep trying");
} else if (grade >= 60) {
  console.log("ehhhh");
} else if (grade >= 55) {
  console.log("Not too good");
} else {
  console.log("Bad Grade But You'll Get Em Next Time");
}

let even = [];
let odd = [];
for (i = 10; i < 100; i += 20) {
  odd.push(i);
}
for (i = 20; i <= 100; i += 20) {
  even.push(i);
}

console.log(odd.toString());
console.log(even.toString());
