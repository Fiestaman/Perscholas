// ship creation
let ship = {
  name: "USS Assembly",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  missiles: 3,
  // shield functionality
  shield: Math.floor(Math.random() * 6) + 6,
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
    this.points = 50;
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
    this.points = 100;
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
    this.points = 25;
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

let score = 0;
let round = 1;

playGame();

// round functionality
function playRound() {
  // random # of attackers generator
  alienFleet.aliens = [];
  let numOfAttackers = Math.floor(Math.random() * 4) + 3;
  for (let i = 1; i <= numOfAttackers; i++) {
    alienFleet.createAlien();
  }

  // add Mega-ship to fleet
  alienFleet.createMega();

  // stronger enemy functionality
  for (let i = 1; i < round; i++) {
    for (let alien of alienFleet.aliens) {
      alien.hull = Math.floor(alien.hull * 1.5);
      alien.firepower = Math.floor(alien.firepower * 1.5);
      alien.points *= 2;
    }
  }

  // stronger ship functionality
  for (let i = 1; i < round; i++) {
    ship.hull = Math.floor(ship.hull * 1.75);
    ship.firepower = Math.floor(ship.firepower * 1.75);
  }

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
          recharge();
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
    console.log(`You fire your lasers with ${ship.firepower} firepower.`);
    if (ship.accuracy >= Math.random()) {
      if (target instanceof Mega && target.pods[0] != undefined) {
        target = target.pods[0];
      }
      target.hull -= ship.firepower;
      if (target.hull <= 0) {
        console.log(`${target.name} was hit and has been destroyed.`);
        score += target.points;
        // console.log(target);
        if (target instanceof Alien || target instanceof Mega) {
          alienFleet.aliens.splice(targetNum - 1, 1);
        } else if (target instanceof Pod) {
          alienFleet.aliens[targetNum - 1].pods.shift();
        }
        if (!alienFleet.aliens[0]) {
          recharge();
          break;
        }
        const prompt = window.prompt(
          "Enter retreat or r to retreat or enter attack or a to attack another ship."
        );
        if (prompt.toLowerCase() == "retreat" || prompt.toLowerCase() == "r") {
          console.log("You retreat to fight another day.");
          break;
        } else if (
          prompt.toLowerCase() == "attack" ||
          prompt.toLowerCase() == "a"
        ) {
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

    for (let attacker of attackers) {
      if (ship.shield > 0) {
        console.log(
          `Your shields are holding and provide ${
            ship.shield
          } hull points. You now have ${ship.shield + ship.hull} hull points.`
        );
      } else {
        ship.shield = 0;
        console.log(
          `Your shields have failed. You now have ${ship.hull} hull points.`
        );
      }

      // alien attack turn
      console.log(
        `${attacker.name} fires its lasers with ${attacker.firepower} firepower.`
      );
      if (attacker.accuracy >= Math.random()) {
        ship.hull -=
          attacker.firepower - ship.shield > 0
            ? attacker.firepower - ship.shield
            : 0;
        if (ship.hull <= 0) {
          console.log(`Your ship has been destroyed. Earth is doomed!`);
          console.log(`You scored ${score} points. Great job!`);
          medal();
          break;
        } else if (ship.hull > 0) {
          console.log(
            `Your hull was hit by ${
              attacker.firepower - ship.shield > 0
                ? attacker.firepower - ship.shield
                : 0
            } damage and has ${ship.hull} hull remaining!`
          );
        }
        ship.shield -= attacker.firepower;
        ship.shield = ship.shield > 0 ? ship.shield : 0;
      } else {
        console.log(`${attacker.name} missed!`);
      }
    }
  }
}

// start game functionality
function playGame() {
  // reset score
  score = 0;

  // reset round
  round = 1;

  // reset ship stats
  ship = {
    name: "USS Assembly",
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    missiles: 3,
    shield: Math.floor(Math.random() * 6) + 6,
  };

  playRound();

  // replay functionality
  let replay = window.prompt("Game over! Would you like to play again? Y/N?");
  if (replay.toLowerCase() == "yes" || replay.toLowerCase() == "y") {
    console.clear();
    playGame();
  } else {
    return;
  }
}

// recharge shields functionality
function recharge() {
  let recharge = window.prompt(
    "Do you want to return to base to recharge shields? Y/N?"
  );
  if (recharge.toLowerCase() == "y" || recharge.toLowerCase() == "yes") {
    ship.shield = Math.floor(Math.random() * 5 + 6);
    console.log(
      `You return to base and recharge your shields to ${ship.shield}.`
    );
  } else if (recharge.toLowerCase() == "n" || recharge.toLowerCase() == "no") {
    console.log("You bravely continue on without recharging shields.");
  } else {
    console.log("Invalid response. Shutting down ship.");
    return;
  }
  console.log(
    "All the alien ships have been destroyed but they called in reinforcements."
  );
  playRound();
}

// medal functionality
function medal() {
  if (score >= 1500) {
    console.log("You got a gold medal!");
  } else if (score >= 1000) {
    console.log("You got a silver medal!");
  } else if (score >= 500) {
    console.log("You got a bronze medal!");
  } else {
    console.log("You didn't score high enough to get a medal.");
  }
}
