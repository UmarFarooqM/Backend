import { Toppings } from "./types";

// Toppings: Sugar (₹10), Honey (₹20), WhippedCream (₹15)

export class Sugar extends Toppings {
  getDescription(): string {
    return this.item.getDescription() + " + Sugar";
  }
  getCost(): number {
    return this.item.getCost() + 10;
  }
}

export class Honey extends Toppings {
  getDescription(): string {
    return this.item.getDescription() + " + Honey";
  }
  getCost(): number {
    return this.item.getCost() + 20;
  }
}

export class WhippedCream extends Toppings {
  getDescription(): string {
    return this.item.getDescription() + " + WhippedCream";
  }
  getCost(): number {
    return this.item.getCost() + 15;
  }
}
