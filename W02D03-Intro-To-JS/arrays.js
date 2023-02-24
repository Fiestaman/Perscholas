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
