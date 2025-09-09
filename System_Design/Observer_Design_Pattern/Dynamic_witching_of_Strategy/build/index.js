"use strict";
// Create an interface Vehicle with a method start().
class Bike {
    start() {
        console.log("Bike is starting");
    }
}
class Car {
    start() {
        console.log("Car is starting");
    }
}
class Bulero {
    start() {
        console.log("Bulero is starting");
    }
}
class Driver {
    constructor(vehicle) {
        this.vehicle = vehicle;
    }
    drive() {
        this.vehicle.start();
        console.log("Driving...");
    }
    setVehicle(vehicle) {
        this.vehicle = vehicle;
    }
}
let car = new Car();
let bike = new Bike();
let bulero = new Bulero();
let driver = new Driver(car);
driver.drive();
driver.setVehicle(bike);
driver.drive();
