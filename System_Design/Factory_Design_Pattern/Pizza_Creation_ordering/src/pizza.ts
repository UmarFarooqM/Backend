import { Pizza } from "./types";

class Margherita implements Pizza {
  prepare(): void {
    console.log("Praparing Margherita Pizza");
  }
  bake(): void {
    console.log("Baking Margherita Pizza");
  }
  cut(): void {
    console.log("Cutting Margherita Pizza");
  }
  box(): void {
    console.log("Boxing Margherita Pizza");
  }
}

export class Cheese implements Pizza {
  prepare(): void {
    console.log("Praparing Cheese Pizza");
  }
  bake(): void {
    console.log("Baking Cheese Pizza");
  }
  cut(): void {
    console.log("Cutting Cheese Pizza");
  }
  box(): void {
    console.log("Boxing Cheese Pizza");
  }
}

export class Formhouse implements Pizza {
  prepare(): void {
    console.log("Praparing Formhouse Pizza");
  }
  bake(): void {
    console.log("Baking Formhouse Pizza");
  }
  cut(): void {
    console.log("Cutting Formhouse Pizza");
  }
  box(): void {
    console.log("Boxing Formhouse Pizza");
  }
}

export class Special implements Pizza {
  prepare(): void {
    console.log("Praparing Special Pizza");
  }
  bake(): void {
    console.log("Baking Special Pizza");
  }
  cut(): void {
    console.log("Cutting Special Pizza");
  }
  box(): void {
    console.log("Boxing Special Pizza");
  }
}

export default Margherita;
