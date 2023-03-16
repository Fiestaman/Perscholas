const ship = {
  name: "USS Assembly",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
};

const alienFleet = {
  aliens: [],
  create: function () {
    const newAlien = new Alien();
    this.aliens.push(newAlien);
  },
};

class Alien {
  constructor() {
    this.name = `Alien${Alien.num++}`;
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = Math.random() * 0.2 + 0.6;
  }
  static num = 1;
}

for (let i = 1; i <= 6; i++) {
  alienFleet.create();
}

// console.log(alienFleet);
while (ship.hull > 0) {
  let target = alienFleet.aliens[0];
  // ship attack
  console.log(`You fire your lasers.`);
  if (ship.accuracy >= Math.random()) {
    target.hull -= ship.firepower;
    if (target.hull <= 0) {
      console.log(`${target.name} was hit and has been destroyed.`);
      alienFleet.aliens.shift();
      if (!alienFleet.aliens[0]) {
        console.log(
          `The entire alien fleet has been destroyed. Earth is saved!`
        );
        break;
      }
      const prompt = window.prompt(
        "Enter retreat to retreat or attack to attack the next ship."
      );
      if (prompt == "retreat") {
        console.log("You retreat to fight another day.");
        break;
      } else if (prompt.toLowerCase() == "attack") {
        continue;
      } else {
        console.log("Invalid response. Shutting down ship.");
        break;
      }
    } else if (target.hull > 0) {
      console.log(
        `${target.name} has been hit and has ${target.hull} hull remaining!`
      );
    }
  } else {
    console.log(`You missed!`);
  }

  // alien attack
  console.log(`${target.name} fires its lasers.`);
  if (ship.accuracy >= Math.random()) {
    ship.hull -= target.firepower;
    if (ship.hull <= 0) {
      console.log(`Your ship has been destroyed. Earth is doomed! You lose.`);
    } else if (ship.hull > 0) {
      console.log(`You have been hit and have ${ship.hull} hull remaining!`);
    }
  } else {
    console.log(`${target.name} missed!`);
  }
}
