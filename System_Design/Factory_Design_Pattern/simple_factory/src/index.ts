// Create a simple VehicleFactory that can return either a Bike or a Car object.
//  Each should implement a common Vehicle interface with a getDetails() method.

interface Vehicle {
  getDetails(): string;
}

class Bike implements Vehicle {
  getDetails(): string {
    return `Bike : Yamaha`;
  }
}
class Car implements Vehicle {
  getDetails(): string {
    return `Car : Toyota`;
  }
}

abstract class Factory {
  abstract createVehicle(name: string, brand: string): Vehicle;
}

class VehicleFactory extends Factory {
  createVehicle(name: string, brand: string): Vehicle {
    if (name == "Bike" && brand == "Yamaha") {
      return new Bike();
    } else if (name == "Car" && brand == "Toyota") {
      return new Car();
    } else {
      throw new Error("Invalid Details");
    }
  }
}

let vehicleFactory: VehicleFactory = new VehicleFactory();

const myBike = vehicleFactory.createVehicle("Bike", "Yamaha");
console.log(myBike.getDetails());

const myCar = vehicleFactory.createVehicle("Car", "Toyota");
console.log(myCar.getDetails());
