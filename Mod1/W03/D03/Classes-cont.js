/// ====================
// Classes Continued...
/// ====================

//Character
class Character {
  constructor(
    nameParam,
    ageParam,
    eyesParam,
    hairParam,
    lovesCats = false,
    loveDogs
  ) {
    this.legs = 2;
    this.arms = 2;
    this.eyes = eyesParam;
    this.hair = hairParam;
    this.name = nameParam;
    this.age = ageParam;
    this.lovesCats = lovesCats;
    this.lovesDogs = loveDogs || false;
  }

  greet(otherCharacter) {
    console.log("hi " + otherCharacter + "!");
  }

  classyGreeting(otherClassyCharacter) {
    console.log("Greetings " + otherClassyCharacter.name + "!");
  }

  setHair(hairColor) {
    this.hair = hairColor;
  }

  smite() {
    console.log("I smite thee you vile person");
  }
}
//=======================
// child class for Hobbit. Inherits from Character class
class Hobbit extends Character {
  constructor(name, age, eyes, hair) {
    super(name, age, eyes, hair);
    this.skills = ["thievery", "speed", "willpower"];
  }

  steal() {
    console.log("lets get away! gotcha stuff haha!");
  }

  greet(otherCharacter) {
    console.log(`Hello ${otherCharacter}`);
  }

  smite() {
    super.smite(); // how to access parents properties and methods
    // ^ running the original smite method from the Character class
    this.steal();
  }
}

class ShireHobbit extends Hobbit {
  constructor(name, age, eyes, hair, skills) {
    super(name, age, eyes, hair, skills);
  }
}
const frodo = new ShireHobbit("frodo", 30, "brown", "brown");

const josh = new Character("Josh the Great", 30, "brown", "maroon", true, true);
const bowser = new Character("Bowser the Tort", 2, "green", "Shell");
console.log(josh);
console.log(bowser);
// console.log(typeof josh);
// console.log(typeof bowser);

josh.greet("bowser");
josh.smite();
josh.setHair("short");
console.log(josh);
bowser.greet("josh");
bowser.smite();

// interacting with another character
josh.classyGreeting(bowser);
bowser.classyGreeting(josh);

const bilbo = new Hobbit("Bilbo Baggins", 120, "brown", "brown");
console.log(bilbo);
bilbo.smite();
bilbo.steal();
bilbo.greet("Gandalf");
bilbo.smite();

/// ====================
// Factories
/// ====================

class Car {
  constructor(maker, serialNumber, color, surroundSound) {
    this.serialNumber = serialNumber;
    this.maker = maker;
    this.color = color;
    this.surroundSound = surroundSound;
  }

  drive() {
    console.log("Vroom Vroom");
  }
}

const newCar = new Car("Mazda", 12345);

class Factory {
  constructor(company) {
    this.company = company;
    this.cars = [];
  }
  generateCar(color, surroundSound, butterflyDoors = false) {
    const newCar = new Car(
      this.company,
      this.cars.length,
      color,
      surroundSound
    );
    newCar.butterflyDoors = butterflyDoors;
    this.cars.push(newCar);
  }
  findCar(index) {
    return this.cars[index];
  }
}
const tesla = new Factory("Tesla");
tesla.generateCar("red", true);
tesla.generateCar("white", false);
tesla.generateCar("black", true, false);
tesla.generateCar("tan", false, false);
console.log(tesla);
console.log(tesla.cars);

// STATIC METHODS
class Person {
  static eyeColors() {
    return ["blue", "green", "brown"];
  }
  // rest of class definition here...
}

// more code...
const superman = new Character(
  "Clark Kent",
  30,
  Person.eyeColors()[0],
  "black"
);

console.log(frodo);
