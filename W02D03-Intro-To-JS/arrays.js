// Arrays

let movies = [
  "Kung Fu Hustle",
  "The Big Lebowski",
  "The Matrix",
  "Interstellar",
];

let firstMovie = movies[0];
// console.log(firstMovie);
// console.log(movies[3]);

// Push - add to end
movies.push("Lord of the Rings", "The Hobbit");
// console.log(movies);

// Unshift - add to front
movies.unshift("Star Wars");
// console.log(movies);

// Pop - remove last
movies.pop();
// console.log(movies);

// Shift - remove front
movies.shift();
// console.log(movies);

// Splice
// splice(start, deleteCount, newItem1, newItem2, ...)
// returns removed elements
movies.splice(3, 1, "Spaceballs", "Alien");
// console.log(movies);

movies.splice(4, 3);
// console.log(movies);

// Looping over Array with For Loop
// for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i]);
// }

// forEach
movies.forEach((movie, idx) => {
  console.log(idx, movie);
});

// For of loop
for (let movie of movies) {
  if (movie === "The Matrix") break;
  console.log(movie);
}

// Slice
const copyArr = movies.slice(1, 3);
console.log(copyArr);
console.log(movies);

// ... - Spread operator
let moviesCopy = ["Toy Story", ...movies, "Interstellar"];
console.log(moviesCopy);

let moviesCopy2 = [...movies];
movies.pop();
console.log(moviesCopy2);

// Join - create a string from an array
let moviesStr = movies.join(", ");
console.log(moviesStr);

// Split - create an array from a string
const str = "Hello World it's a good friday";

const strArr = str.split(" ");

const names = ["Ramya", "Candra", "Devin", "Gino", "Arwa", "Ramya"];

// indexOf
console.log(names.indexOf("Candra"));

// lastIndexOf - returns last index of value
console.log(names.lastIndexOf("Ramya"));

// includes
console.log(names.includes("Devin"));

// reverse
console.log(names.reverse());

// sort
const fruits = ["apple", "banana", "Cucumber"];
console.log(fruits.sort());

const nums = [4, 10, 5, 6];
console.log(nums.sort());
