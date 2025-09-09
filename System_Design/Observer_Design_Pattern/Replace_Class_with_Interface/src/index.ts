// You are given a tightly coupled Car class that uses an Engine class directly.

// Refactor this to use an interface IVehicle with method start(). Then create:

// Car class implementing IVehicle
// Bike class implementing IVehicle
// Driver class that uses IVehicle in its constructor and calls start() and "Driving...".
// Expected Output:

// Car is starting
// Driving...
// Bike is starting
// Driving...


interface IVehicle{
    start():void ;
}

class Car implements IVehicle{
    start(): void {
        console.log("Car is starting");
    }
}

class Bike implements IVehicle{
    start(): void {
        console.log("Bike is starting");
    }
}

class Driver{
    vehicle : IVehicle 
    constructor(vehicle:IVehicle){
        this.vehicle = vehicle
        this.vehicle.start()
        console.log("Driving....")
    }
    
}

new Driver(new Car)
new Driver(new Bike) 

