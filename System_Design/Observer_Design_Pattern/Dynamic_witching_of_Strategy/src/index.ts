// Create an interface Vehicle with a method start().

// Implement Bike and Car classes that log appropriate start() messages.
// Create a Driver class that receives a Vehicle in its constructor and calls drive().
// Then: Add a setVehicle() method in Driver to switch between vehicles at runtime.

interface Vehicle{
    start():void ;
}

class Bike implements Vehicle{
    start(): void {
        console.log("Bike is starting");
    }
}

class Car implements Vehicle{
    start(): void {
        console.log("Car is starting");
    }
}

class Bulero implements Vehicle{
    start(): void {
        console.log("Bulero is starting");
    }
}

class Driver{
    vehicle : Vehicle
    constructor(vehicle:Vehicle){
        this.vehicle = vehicle
    }
    drive():void{
        this.vehicle.start()
        console.log("Driving...");
    }
    setVehicle(vehicle:Vehicle){
        this.vehicle = vehicle
    }
}

let car = new Car()
let bike = new Bike()
let bulero = new Bulero()


let driver = new Driver(car)
driver.drive()
driver.setVehicle(bike)
driver.drive()


