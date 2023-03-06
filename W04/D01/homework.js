class Hamster {
  constructor(name) {
    this.owner = [];
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}
// console.log(new Hamster("Jerry"));

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
    console.log(`Hello, ${this.name}! How are you today?`);
  }
  eat(meals) {
    this.weight += meals;
    this.mood += meals;
    console.log(`${this.name} ate ${meals} meals and feels better.`);
  }
  exercise(reps) {
    this.weight -= reps;
    console.log(`${this.name} worked out ${reps} times and lost some weight.`);
  }
  ageUp(years) {
    this.age += years;
    this.height += years;
    this.weight += years;
    this.mood -= years;
    this.bankAccount += 10 * years;
    console.log(`${this.name} is ${years} years older.`);
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
    console.log(`${this.name} bought a hamster named ${hamster.name}.`);
  }
}
// const ham1 = new Hamster("Bob");
// const p1 = new Person("Jim");
// p1.buyHamster(ham1);
// console.log(p1);

const timmy = new Person("Timmy");

timmy.ageUp(5);

timmy.eat(5);

timmy.exercise(5);

timmy.ageUp(9);

const gus = new Hamster("Gus");

gus.owner = "Timmy";

timmy.buyHamster(gus);

timmy.ageUp(15);

timmy.eat(2);

timmy.exercise(2);
