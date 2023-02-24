// While loops

// Exercises

// let i = 10;

// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// let a = 0;

// while (a < 35) {
//   if (a % 3 === 0) {
//     console.log(a);
//   }
//   a++;
// }

// let b = 0;

// while (b < 100) {
//   if (b % 5 === 0) {
//     console.log(b);
//   }
//   b++;
// }

// let c = 0;

// while (c <= 20) {
//   if (c % 2 === 0) {
//     console.log(c * 3);
//   }
//   c++;
// }

let d = 1;

while (d <= 20) {
  let notPrime = false;
  for (i = 2; i < d; i++) {
    if (d % i === 0 && d != i) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    console.log(d);
  }
  d++;
}

// for (var counter = 0; counter <= 100; counter++) {
//   var notPrime = false;
//   for (var i = 2; i <= counter; i++) {
//     if (counter % i === 0 && i !== counter) {
//       notPrime = true;
//     }
//   }
//   if (notPrime === false) {
//     console.log(counter);
//   }
// }
