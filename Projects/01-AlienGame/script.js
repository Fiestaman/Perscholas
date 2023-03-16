class Alien {
  constructor() {
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = Math.random() * 0.2 + 0.6;
  }
}
