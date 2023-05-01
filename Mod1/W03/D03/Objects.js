// Objects Adventure

const adventurer = {
  name: "Timothy",
  hitpoints: 10,
  belongings: ["sword", "potion", "Tums"],
  companion: {
    name: "Velma",
    type: "Bat",
    companion: {
      name: "Pepe",
      type: "Parasite",
      belongings: ["SCUBA tank", "Rogan josh", "health insurance"],
    },
  },
};

// Accessing an array within an object
console.log(adventurer.belongings);

// Accessing an element from an array within an object

console.log(adventurer.belongings[1]); //potion

//Iterate over an array that is within an object
for (let i = 0; i < adventurer.belongings.length; i++) {
  console.log(adventurer.belongings[i]);
}

//Accessing an object/object property within an object
console.log(adventurer.companion.name);
console.log(adventurer.companion.type);

// Use an object within an object within an object
console.log(adventurer.companion.companion.name);

//Use an array within an object within an object within an object

console.log(adventurer.companion.companion.belongings[2]);

const pepeBelongings = adventurer.companion.companion["belongings"];

for (let i = 0; i < pepeBelongings.length; i++) {
  console.log(pepeBelongings[i]);
}

const velma = adventurer.companion;

console.log(velma.companion.belongings);

// USING A ARRAY OF OBJECTS
const movies = [
  { title: "Tokyo Story" },
  { title: "Paul Blart: Mall Cop" },
  { title: "L'Avventura" },
];

console.log(movies[1].title);

// Looping over an array of objects
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].title);
}

// Combine objects, arrays, and functions

//You can create a property for an object that is an array

const foo = {
  someArr: [1, 2, 3],
};

foo.someArr[0]; // 1

//You can create a property for an object that is an object

const foo2 = {
  someObject: {
    someProperty: "oh hai!",
  },
};
foo2.someObject.someProperty; //oh hai!

// You can create a property for an object that is a function (method)
const foo3 = {
  someMethod: () => {
    console.log("oh hai");
  },
};

foo3.someMethod(); //logs 'oh hai!'

// You can store an array in an array

const foo4 = [
  ["hey", "0,1", "0,2"],
  ["1,0", "1,1", "1,2"],
  ["2,0", "2,1", "2,2", ["im", "in", "another", "array"]],
];

foo4[1][2]; //1,2

console.log(foo4[0][1]); //0,1

console.log(foo4[2][0]); // 2,0

console.log(foo4[2][3][2]); // another

console.log(foo4[0][0][2]); // y - this used bracket notation on a string

// You can store a function in an array

const foo5 = [
  1,
  "hi",
  [
    () => {
      console.log("fun");
    },
  ],
];

foo5[2][0]();

const fnArr = [
  {
    name: "Edwin",
    abilities: [
      () => {
        console.log("Hey!");
      },
    ],
  },
  {
    name: "Jeffrey",
    abilities: [
      () => {
        console.log("Wassup!");
      },
      [
        () => {
          console.log("time travel!");
        },
      ],
    ],
  },
];
fnArr[0].abilities[0](); // fnArr[0] - ln.126 , fnArr[0].abilities - ln.128, fnArr[0].abilities[0] - ln.129, fnArr[0].abilities[0]() invoke the Hey! function

fnArr[1].abilities[1][0](); // fnArr[1] - ln.134, fnArr[1].abilities - ln.136, fnArr[1].abilities[1] - ln.140, fnArr[1].abilities[1][0] - 141

console.log(fnArr[1]); // entire Jeffrey object
console.log(fnArr[1].abilities);
console.log(fnArr[1].abilities[1]); // array with function inside as first term
console.log(fnArr[1].abilities[1][0]); // function itself
