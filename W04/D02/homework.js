////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////

// Answer using modulus
// for (let i = 0; i <= 200; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2]++;

wolfy[3] = "Gotham City";

dart.push("Hawkins");

wolfy.splice(0, 1, "Gameboy");

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (turtle of ninjaTurtles) {
  console.log(turtle.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
console.log(favMovies.indexOf("Titanic"));
favMovies.sort(); // Mutates the array in place
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
console.log(favMovies);
favMovies.shift();
favMovies.unshift(); // returns length of new array
favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar"); // does not alter our array
let sliced = favMovies.slice(Math.floor(favMovies.length / 2));
console.log(sliced); // slice returns the elements in the last half of array
// then we store that value into the variable sliced
console.log(favMovies);
console.log(favMovies.indexOf("Volver"));
// indexOf returns -1 if parameter not found in array
// const will only prevent changes that involve changing array size

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
whereIsWaldo.splice(1, 1);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////
const kittenArr = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(kittenArr[Math.floor(Math.random() * kittenArr.length)]);
  } else {
    console.log(i);
  }
}

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12, 13,
];
nums.sort();
if (nums.length % 2 == 1) {
  let medianNumber = nums[Math.ceil(nums.length / 2)];
  console.log(medianNumber);
} else if (nums.length % 2 == 0) {
  let medianNumber = (nums[nums.length / 2] + nums[nums.length / 2 + 1]) / 2;
  console.log(medianNumber);
}

////////////////////////////////
//  Hungry for More
////////////////////////////////

////////////////////////////////
//  Return of the Closets
////////////////////////////////
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

let kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);
function kOutfit() {
  console.log(
    `Kristyn will be wearing ${
      kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)]
    },  ${
      kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)]
    }, and  ${
      kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)]
    }.`
  );
}
kOutfit();
kOutfit();
kOutfit();

function tOutfit() {
  console.log(
    `Thom will be wearing ${
      thomsCloset[0][Math.floor(Math.random() * thomsCloset.length)]
    },  ${
      thomsCloset[1][Math.floor(Math.random() * thomsCloset.length)]
    }, and  ${thomsCloset[2][Math.floor(Math.random() * thomsCloset.length)]}.`
  );
}
tOutfit();
tOutfit();
tOutfit();

////////////////////////////////
//  Dirty Laundry
////////////////////////////////
for (item of kristynsCloset) {
  console.log(`WHIRR: Now washing ${item}`);
}
for (i = 0; i < thomsCloset.length; i++) {
  console.log(thomsCloset[i]);
}
