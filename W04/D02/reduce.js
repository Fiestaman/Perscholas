//****reduce() method****
//executes a reducer function for array elements
//returns a single value: the functions accumulated result
//does not execute on empty array elements
//does not change/mutate the original array

const array1 = [1, 2, 3, 4];

//const sum = 0; current value
const sum = array1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);

const array2 = [100, 25, 20];

//const sum = 100; current value
const difference = array2.reduce((accumulator, currentValue) => {
  return accumulator - currentValue;
});
console.log(difference);

//Edwin Rodela, Gino Torres, Ramya Putta, Jennifer Nguyen
