/* Map Method 
- takes data from an array
- performs function with said data 
- creates a new array with the results
 */

//Examples:

const nums = [1, 2, 3, 4, 5];
// task: multiply each number by 10

//normally, we would use a for loop to create the new array...

// for (let i = 0; i < nums.length; i++) {
//   nums[i] = nums[i] * 5; //Iterates through the array. Taking the values at the current index number and reassigns its value to the resulting value
// }
// console.log(nums);

//Another way we can create a new array of data is by using the Map() method:

const bigNums = nums.map((nums) => {
  return nums * 10;
});

//(using the variable we declared above)
console.log(nums); // Expected Output: [1, 2, 3, 4, 5]
console.log(bigNums); // expected Output: [10, 20, 30, 40, 50]

// // console.log("=====================");

// //Mapping over objects

let group = [
  { firstName: "Yuan", lastName: "Wu" },
  { firstName: "Bryan", lastName: "Perez" },
  { firstName: "Delfina", lastName: "Gist" },
  { firstName: "Candra", lastName: "McGill" },
];

let groupList = group.map((group) => {
  return `${group.firstName} ${group.lastName}; `;
});

console.log(groupList);
