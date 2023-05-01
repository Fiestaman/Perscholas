// Classes
class Cat {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.hungry = true;
    this.dirty = true;
    this.happy = false;
  }
  feed() {
    this.hungry = false;
    console.log(this.name + " is no longer hungry.");
  }
  bathe() {
    this.dirty = false;
    console.log(this.name + " is squeaky clean now!");
  }
  pet() {
    this.happy = true;
    console.log(this.name + " is happy and purring from being pet.");
  }
  bio() {
    console.log(
      this.name +
        " is a " +
        this.color +
        " cat who is " +
        this.age +
        " years old."
    );
  }
}

const cat1 = new Cat("Frisky", "brown", 5);
const cat2 = new Cat("Kitty", "black", 7);

console.log(cat1);
console.log(cat2);

cat1.feed();
cat1.bathe();
cat1.pet();
cat1.bio();

cat2.feed();
cat2.bathe();
cat2.pet();
cat2.bio();

// Constructors
class Pirate {
  constructor(name, age, gender) {
    (this.name = name), (this.age = age), (this.gender = gender);
  }
  sing() {
    this.singing = true;
    console.log(this.name + "joins you in song.");
  }
  plank() {
    this.alive = false;
    console.log("You made " + this.name + " walk the plank.");
  }
  mop() {
    console.log(this.name + " starts swabbing the deck.");
  }
}

const jollyRoger = [
  new Pirate("Bill", 33, "male"),
  new Pirate("Jane", 24, "female"),
  new Pirate("Jack", 27, "male"),
];
const blackPearl = [
  new Pirate("Bob", 31, "male"),
  new Pirate("Roger", 22, "male"),
  new Pirate("Sue", 26, "female"),
];

// Iterate through each array and log 3 properties

// Brute force method directly iterating each array
// console.log("");
// console.log("Jolly Roger roster:");
// for (let pirate of jollyRoger) {
//   for (let prop in pirate) {
//     console.log(
//       prop.charAt(0).toUpperCase() + prop.slice(1) + ": " + pirate[prop]
//     );
//   }
//   console.log("");
// }
//
// console.log("");
// console.log("Black Pearl roster:");
// for (let pirate of blackPearl) {
//   for (let prop in pirate) {
//     console.log(
//       prop.charAt(0).toUpperCase() + prop.slice(1) + ": " + pirate[prop]
//     );
//   }
//   console.log("");
// }

// D.R.Y. method using function
// works with any number of ship arrays
// can simply call function with array name
// instead of repeating brute force method code
// for each new ship array
function roster(array) {
  console.log("");
  console.log(Object.keys(array)[0] + " roster:");
  for (let pirate of Object.values(array)[0]) {
    for (let prop in pirate) {
      console.log(
        prop.charAt(0).toUpperCase() + prop.slice(1) + ": " + pirate[prop]
      );
    }
    console.log("");
  }
}

// must create object from array name and array contents
// then pass that as function argument
// for function to work correctly
roster({ jollyRoger });
roster({ blackPearl });
