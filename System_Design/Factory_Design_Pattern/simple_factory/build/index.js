"use strict";
// Create a simple VehicleFactory that can return either a Bike or a Car object.
//  Each should implement a common Vehicle interface with a getDetails() method.
class Bike {
    getDetails() {
        return `Bike : Yamaha`;
    }
}
class Car {
    getDetails() {
        return `Car : Toyota`;
    }
}
class Factory {
}
class VehicleFactory extends Factory {
    createVehicle(name, brand) {
        if (name == "Bike" && brand == "Yamaha") {
            return new Bike();
        }
        else if (name == "Car" && brand == "Toyota") {
            return new Car();
        }
        else {
            throw new Error("Invalid Details");
        }
    }
}
let vehicleFactory = new VehicleFactory();
const myBike = vehicleFactory.createVehicle("Bike", "Yamaha");
console.log(myBike.getDetails());
const myCar = vehicleFactory.createVehicle("Car", "Toyota");
console.log(myCar.getDetails());
