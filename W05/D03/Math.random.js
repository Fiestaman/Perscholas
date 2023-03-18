// Using Math.random and Math.floor to create random whole integer number
// in a set range
Math.floor(Math.random() * (max - min + 1)) + min;

// random integer between 3 and 6 ie [3, 4, 5, 6] (min=3 max=6)
Math.floor(Math.random() * 4) + 3;

//
// Math.random returns number between 0 inclusive and 1 exclusive
Math.random(); // returns # between 0-0.9999999999999999...

// Shifts range of numbers from 0-0.9999 to 0-3.999999 (6-3+1)=4
Math.random() * 4; // returns # between 0-3.9999999...

// Changes to whole integers ie 0, 1, 2, 3 removes .9999... part
Math.floor(Math.random() * 4); // returns whole integer between 0-3

// Shifts range of number to match by adding min (integers) ie 3, 4, 5, 6
Math.floor(Math.random() * 4) + 3; // returns whole integer between 3-6
