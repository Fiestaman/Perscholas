/**
 * Governor Static methods and props
 */

class Governor {
  static name = "Arwa";
  static state = "Texas";
  static term = "3 years";
  static count = 0;

  static veto(bill) {
    console.log(`I veto ${bill}!!`);
  }

  static giveASpeech() {
    console.log("big fancy speech.");
  }
}
console.log(Governor.name);
Governor.veto("someBill");

Governor.giveASpeech();

/**
 * Inheritance
 */

class Person {
  constructor(name, hair, age, gender, bankNum) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.hair = hair;
    this.age = age;
    this.mood = 5;
    this.gender = gender;
    this.bankNum = bankNum;
  }

  sleep() {
    this.mood += 3;
    console.log("That was a good nap. Mood: " + this.mood);
  }

  interact(otherPerson) {
    console.log(`Hi ${otherPerson.name}! My name is ${this.name}`);
  }
}

const devin = new Person("Devin", "brown", 21, "male", 12354);

const jacqueline = new Person("Jacqueline", "brown", 21, "female");

devin.sleep();

jacqueline.interact(devin);

class PostalWorker extends Person {
  constructor(name, hair, age, gender, jobTitle) {
    super(name, hair, age, gender);
    this.jobTitle = jobTitle;
    this.status = "just chillen";
  }

  deliverMail() {
    this.status = "on the delivery route";
    console.log(`My status: ${this.status}`);
  }

  interact(otherPerson) {
    console.log(`Hi ${otherPerson.name}. Here is your mail!`);
  }
}

const nic = new PostalWorker("driver");

nic.interact(devin);

/**
 * Bank Account
 */

class BankAccount {
  constructor() {
    this.ownerName = "Candra McGill";
    this.balance = 1000000;
    this.acctNum = 12345;
  }

  deposit(amount, bankNum) {
    if (amount > 0 && bankNum === this.acctNum) {
      this.balance += amount;
    } else {
      console.log("Invalid Transaction");
    }
  }

  withdraw(amount, bankNum) {
    if (amount > 0 && bankNum === this.acctNum) {
      this.balance -= amount;
    } else {
      console.log("Invalid Transaction");
    }
  }
}

class CheckingAccount extends BankAccount {
  constructor() {
    super();
    this.overdraftEnabled = true;
  }

  setOverdraft(setting) {
    this.overdraftEnabled = setting;
  }

  withdraw(amount, bankNum) {
    if (this.overdraftEnabled && this.balance - amount < 0) {
      console.log("Not enough funds");
      return;
    }

    if (bankNum === this.acctNum) {
      this.balance -= amount;
    } else {
      console.log("Invalid Transaction");
    }
  }
}

class SavingsAccount extends BankAccount {
  withdraw() {
    console.log("not allowed, this is a savings account");
  }
}

const bankAccount = new BankAccount();

const checkingAccount = new CheckingAccount();

const savingsAccount = new SavingsAccount();

savingsAccount.withdraw(8000);

checkingAccount.setOverdraft(false);
checkingAccount.withdraw(10000065, 12345);

bankAccount.deposit(25000, 12345);
bankAccount.withdraw(1125000, 12345);
console.log(savingsAccount);
