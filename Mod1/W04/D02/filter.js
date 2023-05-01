// Filter
// The filter() method returns a new array filled with elements that pass a test provided by a function.
// Will return empty array if no elements pass.

// Examples of use case scenarios include, selecting:
// All even numbers.
// Elements with a price over $100.
// People over 18 years old.
// Products that has x amount or less of stock.

// Example
const prices = [55, 25, 105, 135, 52, 37, 104, 16];
const pricesOver = prices.filter(overFifty);

function overFifty(price) {
  return price > 50;
}

console.log(pricesOver);

// Example without calling a function
const ages = [18, 25, 53, 6, 43, 2, 14, 38];
const adults = ages.filter((age) => age >= 18);

console.log(adults);

// The filter method returns the resulting array after each element is iterated over
// and parameter function is run. Only the elements that return true after function
// is run are included in resulting array.

const arr = [true, false, true];
const arrFiltered = arr.filter((element) => element);
console.log(arrFiltered);
// This would print [true, true] in the console as arrow function implicitly returns.

const arr2 = [true, false, true];
const arr2Filtered = arr2.filter(filt);
function filt(element) {
  element;
}
console.log(arr2Filtered);
// This would print [] (an empty array) as function did not return anything.
