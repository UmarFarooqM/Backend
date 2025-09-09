"use strict";
// Then refactor it using an interface to show loose coupling.
// Problem : 
// Given : Explain why you cannot easily switch to a DieselEngine without modifying Car.
class PetrolEngine {
    start() {
        console.log("Petrol engine started");
    }
}
class DieselEngine {
    start() {
        console.log("Deisel engine started");
    }
}
class Car {
    constructor(engineType) {
        this.engineType = engineType;
    }
    drive() {
        this.engineType.start();
        console.log("Driving...");
    }
    setEngineType(engineType) {
        this.engineType = engineType;
    }
}
let car = new Car(new PetrolEngine);
car.drive();
car.setEngineType(new DieselEngine); // we cas easily switch from one engine to another withour modifying the class .
car.drive();
