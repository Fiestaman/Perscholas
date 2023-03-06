// Static Methods and Properties
class Governor {
  constructor(name, age, gender) {
    this.id = ++Governor.id;
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  static veto() {
    console.log("The Governor vetoed the bill.");
  }
  static sign() {
    console.log("The Governor signed the bill.");
  }
  static placeholder() {
    return new this("Unknown", "Unknown", "Unknown");
  }
  static howMany() {
    console.log(`There have been ${this.id} governors.`);
  }
  static vetoPower = true;
  static termYrs = 4;
  static id = 0;
}

console.log(Governor);
Governor.veto();
Governor.sign();
// const g1 = new Governor("Bob", 55, "male");
// const g2 = new Governor("Penny", 53, "female");

// console.log(g1);
// console.log(g2);
Governor.howMany();
console.log(Governor.placeholder());

// Inheritance
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  sleep() {
    this.awake = false;
    console.log(this.name + " fell asleep.");
  }
  wake() {
    this.awake = true;
    console.log(this.name + " woke up.");
  }
  eat(food) {
    this.hungry = false;
    console.log(this.name + " eats " + food + " and is no longer full.");
  }
}

class PostalWorker extends Person {
  sort() {
    console.log(this.name + " starts sorting the mail.");
  }
  deliver(address) {
    console.log(this.name + " delivers mail to " + address);
  }
}

class Chef extends Person {
  chop(ingredient) {
    console.log(this.name + " starts chopping " + ingredient + ".");
  }
  sear(meat) {
    console.log(this.name + " starts searing " + meat + ".");
  }
}

const pw1 = new PostalWorker("Bob", 27, "male");
const pw2 = new PostalWorker("Sue", 35, "female");

const chef1 = new Chef("Andy", 32, "male");
const chef2 = new Chef("Jenny", 28, "female");

console.log(pw1);
console.log(pw2);

pw1.sleep();
pw1.wake();
pw1.eat("a banana");
pw1.sort();
pw1.deliver("123 Main St.");

pw2.sleep();
pw2.wake();
pw2.eat("an apple");
pw2.sort();
pw2.deliver("456 1st St.");

console.log(chef1);
console.log(chef2);

chef1.sleep();
chef1.wake();
chef1.eat("a sandwich");
chef1.chop("tomatoes");
chef1.sear("pork chops");

chef2.sleep();
chef2.wake();
chef2.eat("a bowl of soup");
chef2.chop("carrots");
chef2.sear("a steak");

// Hungry For More
class BankAccount {
  constructor(name, balance) {
    this.ownerName = name;
    this.balance = balance;
    this.acctNum = ++BankAccount.#acctNum;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      `${amount} was deposited into ${this.ownerName}'s account. Balance is now ${this.balance}.`
    );
  }
  withdraw(amount) {
    this.balance -= amount;
    console.log(
      `${amount} was withdrawn from ${this.ownerName}'s account. Balance is now ${this.balance}.`
    );
  }
  static #acctNum = 0;
}

class CheckingAccount extends BankAccount {
  constructor(name, balance, overdraftEnabled = false) {
    super(name, balance);
    this.overdraftEnabled = overdraftEnabled;
  }
  withdraw() {
    // code to implement overdraft feature
  }
}
// console.log(BankAccount);
// const a = new CheckingAccount("Bob", 1000, true);
// console.log(a);
// a.deposit(1500);
// const b = new CheckingAccount("Sue", 500, false);
// console.log(b);
// const c = new BankAccount("John", 250);
// console.log(c);
// const d = new BankAccount("Ray", 750);
// console.log(d);

class SavingsAccount extends BankAccount {
  withdraw() {
    console.log("Withdrawals are not allowed.");
  }
}

// const e = new SavingsAccount("Jenny", 1250);
// console.log(e);
