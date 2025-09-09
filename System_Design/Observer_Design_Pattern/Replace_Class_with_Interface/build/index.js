"use strict";
// You are given a tightly coupled Car class that uses an Engine class directly.
class Car {
    start() {
        console.log("Car is starting");
    }
}
class Bike {
    start() {
        console.log("Bike is starting");
    }
}
class Driver {
    constructor(vehicle) {
        this.vehicle = vehicle;
        this.vehicle.start();
        console.log("Driving....");
    }
}
new Driver(new Car);
new Driver(new Bike);
