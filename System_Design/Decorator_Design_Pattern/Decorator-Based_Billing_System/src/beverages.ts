import { Beverage } from "./types";

// Base beverages: Espresso (₹80), LemonTea (₹40)

export class Espresso extends Beverage {
  getDescription(): string {
    return "Espresso";
  }
  getCost(): number {
    return 80;
  }
}

export class LemonTea extends Beverage {
  getDescription(): string {
    return "LemonTea";
  }
  getCost(): number {
    return 40;
  }
}
