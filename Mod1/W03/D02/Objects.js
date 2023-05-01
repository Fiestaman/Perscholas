// Objects
// * key/value pairs
// * not in order
// used to store data that can classified as a noun
// store any datatype (even functions)

// My first object
const car = {
  color: "blue",
  hp: 4000,
  year: 1989,
};

console.log(car);

console.log(car.color);

// Adding properties to an object

const house = {
  doors: 9,
};

//Adding
house.windows = 30;

house.hasGarden = true;

console.log(house);

//Changing property
const bicycle = {
  isATricycle: false,
  "new-Val": "al;skdf",
};

bicycle.isATricycle = true;

console.log("=====>", bicycle["new-Val"]);

console.log(bicycle);

// Using square bracket notation on object (can use a variable)
let key = "isATricycle";

console.log(bicycle[key]);

// you can do this

const mogwai = {};

mogwai.name = "Gizmo";

console.log(mogwai);

// Cannot do this
const mogwai2 = {};

//mogwai2 = { name: 'Gizmo' }; //Throws an error becuase variable is const

// Uniques Keys

const borough = {
  name: "Brooklyn",
  name: "The Bronx",
};
console.log(borough);

//=> Object { name: "The Bronx" }
// The last key will override because node read JS from top to bottom

const obj = {
  salutation: "hi",
  count: 4,
  //something: 'a;lskdjf',
};

if (obj.salutation === "hi") {
  console.log("ok");
}

for (let i = 1; i <= 4; i++) {
  console.log(i);
}

// Checking if this property has value
if (obj.something) {
  console.log(obj.something); // prints value because its in the obj
} else {
  console.log(obj.something); // prints undefined
  console.log("no go i dont have that property");
}

// delete keyword and changing a key
let salutationVal = obj.salutation;
delete obj.salutation;
obj.newVal = salutationVal;

console.log(obj);

// Looping over object

const object = { a: 1, b: 2, c: 3 };

for (let property in object) {
  console.log(property + ": " + object[property]);
}
