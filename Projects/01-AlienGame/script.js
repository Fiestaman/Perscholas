const ship = {
  name: "USS Assembly",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  missiles: 3,
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

// random # of attackers generator
const attackers = Math.floor(Math.random() * 5) + 4;
for (let i = 1; i <= attackers; i++) {
  alienFleet.create();
}

console.log(
  `There are ${attackers} alien ships attacking Earth! Take them down!`
);

while (ship.hull > 0) {
  // targeting functionality
  let str = `There are ${alienFleet.aliens.length} alien ships left. Pick a ship number to attack:
`;
  for (let i = 0; i < alienFleet.aliens.length; i++) {
    str = str + (i + 1) + `. ` + alienFleet.aliens[i].name + ` `;
    if (i == 6) {
      str =
        `${str}` +
        `
`;
    }
  }
  let targetNum = window.prompt(str);
  if (targetNum < 1 || targetNum > alienFleet.aliens.length) {
    console.log(`Invalid target. Shutting ship down.`);
    break;
  } else {
    target = alienFleet.aliens[targetNum - 1];
  }

  // missile functionality
  if (ship.missiles > 0) {
    const fireMiss = window.prompt(
      `You have ${ship.missiles} missiles. Would you like to fire one? Y/N?`
    );
    if (fireMiss.toLowerCase() == "yes" || fireMiss.toLowerCase() == "y") {
      ship.missiles--;
      console.log(
        `Missile fired. ${target.name} destroyed. You have ${ship.missiles} missiles left.`
      );
      alienFleet.aliens.splice(targetNum - 1, 1);
      if (!alienFleet.aliens[0]) {
        console.log(
          `The entire alien fleet has been destroyed. Earth is saved!`
        );
        break;
      }
      continue;
    } else if (
      fireMiss.toLowerCase() == "no" ||
      fireMiss.toLowerCase() == "n"
    ) {
    } else {
      console.log(`Invalid response. Shutting ship down.`);
      break;
    }
  }

  // ship attack turn
  console.log(`You fire your lasers.`);
  if (ship.accuracy >= Math.random()) {
    target.hull -= ship.firepower;
    if (target.hull <= 0) {
      console.log(`${target.name} was hit and has been destroyed.`);
      alienFleet.aliens.splice(targetNum - 1, 1);
      if (!alienFleet.aliens[0]) {
        console.log(
          `The entire alien fleet has been destroyed. Earth is saved!`
        );
        break;
      }
      const prompt = window.prompt(
        "Enter retreat to retreat or attack to attack another ship."
      );
      if (prompt.toLowerCase() == "retreat") {
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

  // shield functionality
  const shield = Math.floor(Math.random() * 3 + 1);
  console.log(
    `Your shields fluctuate and provide ${shield} hull points. You now have ${
      shield + ship.hull
    } hull points.`
  );
  let attacker = alienFleet.aliens[0];

  // alien attack turn
  console.log(`${attacker.name} fires its lasers.`);
  if (attacker.accuracy >= Math.random()) {
    ship.hull -= attacker.firepower - shield;
    if (ship.hull <= 0) {
      console.log(`Your ship has been destroyed. Earth is doomed! You lose.`);
    } else if (ship.hull > 0) {
      console.log(
        `Your hull was hit by ${
          attacker.firepower - shield
        } spillover damage and has ${ship.hull} hull remaining!`
      );
    }
  } else {
    console.log(`${attacker.name} missed!`);
  }
}
