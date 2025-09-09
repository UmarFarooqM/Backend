// tightly coupled
class Laptop {
  code(): void {
    console.log("Coding using Laptop");
  }
}
class Desktop {
  code(): void {
    console.log("Coding using Desktop");
  }
}

class Programmer{
    device:Laptop  // depending on class
    constructor(divice:Laptop){
        this.device = divice
    }
    performCoding():void{
        this.device.code()
    }
}


let programmer1 = new Programmer(new Laptop)
programmer1.performCoding()

