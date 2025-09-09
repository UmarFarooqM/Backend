

// Then refactor it using an interface to show loose coupling.
// Problem : 
// Given : Explain why you cannot easily switch to a DieselEngine without modifying Car.

// class PetrolEngine {
//   start(): void {
//     console.log("Petrol engine started");
//   }
// }

// class Car {
//   engine: PetrolEngine = new PetrolEngine();
//   drive(): void {
//     this.engine.start();
//     console.log("Driving car");
//   }
// }

// Explanation : Here we can't easily switcch from petrolEngine to DieelEngine Directly without modifying the car class.
// The reason is both car and petrolEngine are tightly coupled , Means they are directly depended on each other
// When two classes are dependend on each other , we can't able to reuse them .

// Solution  : LosselyCoupling  : Abstraction  (interface/abstract class)


interface Engine{
    start():void ;
}
class PetrolEngine implements Engine{
  start(): void {
    console.log("Petrol engine started");
  }
}

class DieselEngine {
  start(): void {
    console.log("Deisel engine started");
  }
}

class Car{
    engineType : Engine // depending on the Engine interface
    constructor(engineType:Engine){
        this.engineType = engineType
    } 
    drive():void{
        this.engineType.start()
        console.log("Driving...");
    }
    setEngineType(engineType:Engine){
        this.engineType = engineType
    }
}

let car = new Car(new PetrolEngine)
car.drive()
car.setEngineType(new DieselEngine) // we cas easily switch from one engine to another withour modifying the class .
car.drive()
