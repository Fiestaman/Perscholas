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

// let target =
// // ship attack
// if (Math.random() < ship.accuracy) {

// 	console.log(`Alien has been hit!`);
// }
