// Classes

// Defining a Class

class Vehicle {
  constructor(vinParam, makeParam, modelParam = "car") {
    this.vin = vinParam;
    this.make = makeParam;
    this.model = modelParam;
    this.running = false;
    this.speed = 0;
    // console.log('Vehicle');
    // console.log(this.vin);
    // console.log(this.make);
    // console.log(this.model);
  }

  start() {
    this.running = true;
    console.log("running...");
    //console.log(this);
  }

  stop() {
    this.running = false;
    console.log("stopped...");
  }

  zeroToSixty() {
    for (let i = 0; i <= 60; i++) {
      console.log("Speed: " + this.speed);
      this.speed += 1;
    }
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  getSpeed() {
    return this.speed;
  }
}

// const v1 = new Vehicle('X123Y', 'Boeing');

const car = new Vehicle("832746", "Nissan", "Maxima");

// console.log(v1);

car.start();
console.log(car);
car.stop();
console.log(car);

car.zeroToSixty();

car.setSpeed(55);
console.log(car);

console.log(car.getSpeed());
