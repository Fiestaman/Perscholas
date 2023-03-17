// ship creation
const ship = {
  name: "USS Assembly",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  missiles: 3,
};

// alienFleet creation
const alienFleet = {
  aliens: [],
  createAlien: function () {
    const newAlien = new Alien();
    this.aliens.push(newAlien);
  },
  createMega: function () {
    const newMega = new Mega();
    newMega.createPod();
    newMega.createPod();
    this.aliens.push(newMega);
  },
};

// Alien class
class Alien {
  constructor() {
    this.name = `Alien${Alien.num++}`;
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = Math.random() * 0.2 + 0.6;
  }
  static num = 1;
}

// Mega class
class Mega {
  constructor() {
    this.name = "Mega-ship";
    this.pods = [];
    this.hull = Math.floor(Math.random() * 3) + 8;
    this.firepower = Math.floor(Math.random() * 6) + 4;
    this.accuracy = Math.random() * 0.2 + 0.6;
  }
  createPod() {
    const newPod = new Pod();
    this.pods.push(newPod);
  }
}

// Pod class
class Pod {
  constructor() {
    this.name = `Pod${Pod.num++}`;
    this.hull = 4;
  }
  static num = 1;
}

// random array generator
function getRandom(arr, n) {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

playGame();

function playGame() {
  // random # of attackers generator
  const numOfAttackers = Math.floor(Math.random() * 5) + 4;
  for (let i = 1; i <= numOfAttackers; i++) {
    alienFleet.createAlien();
  }

  // add Mega-ship to fleet
  alienFleet.createMega();

  console.log(
    `There are ${
      numOfAttackers + 1
    } alien ships attacking Earth! Take them down!`
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
      console.log(target);
      if (target instanceof Mega && target.pods[0] != undefined) {
        target = target.pods[0];
      }
      target.hull -= ship.firepower;
      if (target.hull <= 0) {
        console.log(`${target.name} was hit and has been destroyed.`);
        // console.log(target);
        if (target instanceof Alien) {
          alienFleet.aliens.splice(targetNum - 1, 1);
        } else if (target instanceof Pod) {
          alienFleet.aliens[targetNum - 1].pods.shift();
        }
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

    // multiple attackers funtionality
    let attackers = [];
    const attackerNum = Math.random();
    if (attackerNum >= 0.95) {
      attackers = alienFleet.aliens;
      console.log(`You're attacked by all alien ships at once.`);
    } else if (attackerNum >= 0.8 && attackerNum < 0.95) {
      let n = 3;
      if (n > alienFleet.aliens.length) {
        n = alienFleet.aliens.length;
      }
      attackers = getRandom(alienFleet.aliens, n);
      let attackersNamesArr = [];
      for (let attacker of attackers) {
        if (attacker.hasOwnProperty("name")) {
          attackersNamesArr.push(attacker.name);
        }
      }
      console.log(`You're attacked by: ${attackersNamesArr.join(", ")}`);
    } else if (attackerNum >= 0.5 && attackerNum < 0.8) {
      let n = 2;
      if (n > alienFleet.aliens.length) {
        n = alienFleet.aliens.length;
      }
      attackers = getRandom(alienFleet.aliens, n);
      let attackersNamesArr = [];
      for (let attacker of attackers) {
        if (attacker.hasOwnProperty("name")) {
          attackersNamesArr.push(attacker.name);
        }
      }
      console.log(`You're attacked by: ${attackersNamesArr.join(", ")}`);
    } else {
      attackers = [
        alienFleet.aliens[Math.floor(Math.random() * alienFleet.aliens.length)],
      ];
      console.log(`You're attacked by: ${attackers[0].name}`);
    }

    // shield functionality
    let shield = Math.floor(Math.random() * 3 + 1);

    for (let attacker of attackers) {
      if (shield > 0) {
        console.log(
          `Your shields fluctuate and provide ${shield} hull points. You now have ${
            shield + ship.hull
          } hull points.`
        );
      } else {
        shield = 0;
        console.log(
          `Your shields have failed. You now have ${ship.hull} hull points.`
        );
      }

      // alien attack turn
      console.log(`${attacker.name} fires its lasers.`);
      if (attacker.accuracy >= Math.random()) {
        ship.hull -= attacker.firepower - shield;
        if (ship.hull <= 0) {
          console.log(
            `Your ship has been destroyed. Earth is doomed! You lose.`
          );
          break;
        } else if (ship.hull > 0) {
          console.log(
            `Your hull was hit by ${
              attacker.firepower - shield
            } damage and has ${ship.hull} hull remaining!`
          );
        }
        shield = 0;
      } else {
        console.log(`${attacker.name} missed!`);
      }
    }
  }

  // replay functionality
  let replay = window.prompt("Game over! Would you like to play again? Y/N?");
  if (replay.toLowerCase() == "yes" || replay.toLowerCase() == "y") {
    console.clear();
    playGame();
  } else {
    return;
  }
}
