// Hamster
// attributes:

// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }

  wheelRun() {
    console.log("squeak squeak");
  }
  eatFoot() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

// Person
// attributes:
// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0

// methods:
// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  greet() {
    console.log(`Hello ${this.name}.`);
  }

  eat(num) {
    this.weight += num;
    this.mood += num;
  }

  exercise(num) {
    this.weight -= num;
  }

  ageUp(num) {
    this.age += num;
    this.height += num;
    this.weight += num;
    this.mood -= num;
    this.bankAccount += 10 * num;
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankaccount -= hamster.getPrice();
  }
}

// Create a Story with your Person class
// Feel free to update or add methods to automate some of these tasks.

// Instantiate a new Person named Timmy
const timmy = new Person("Timmy");

// Age Timmy five years
timmy.ageUp(5);

// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.eat(5);

// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.exercise(5);

// Age Timmy 9 years
timmy.ageUp(9);

// Create a hamster named "Gus"
const gus = new Hamster("Gus");

// Set Gus's owner to the string "Timmy"
gus.owner = "Timmy";

// Have Timmy "buy" Gus
timmy.buyHamster(gus);

// Age Timmy 15 years
timmy.ageUp(15);

// Have Timmy eat twice
timmy.eat(2);

// Have Timmy exercise twice
timmy.exercise(2);

// Chef Make Dinners
class Dinner {
  constructor(app, ent, des) {
    this.appetizer = app;
    this.entree = ent;
    this.dessert = des;
  }
}

class Chef {
  constructor(name) {
    this.name = name;
    this.meals = [];
  }
  cook(app, ent, des) {
    const meal = new Dinner(app, ent, des);
    this.meals.push(meal);
  }
}
// Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners
const billy = new Chef("Billy");
billy.cook("app1", "ent1", "des1");
billy.cook("app2", "ent2", "des3");
billy.cook("app3", "ent3", "des3");
