// Create two classes:

// Engine with method start() that logs "Engine started".
// Car that contains an object of Engine and a method drive() which first calls engine.start() 
// and then logs "Car is driving".
// Task: Demonstrate how one class using another's functionality directly is an example of tight coupling.

class Engine {
    start():void{
        console.log("Engine started");
    }
}
class Car{
    object:Engine 
    constructor(object:Engine) {
        this.object = object
    }
    drive():void{
        this.object.start()
        console.log("Car is driving");
    }
}

let car = new Car(new Engine)
car.drive()