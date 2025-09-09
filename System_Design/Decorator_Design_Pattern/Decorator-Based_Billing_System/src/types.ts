
export abstract class Beverage {
  abstract getDescription(): string;
  abstract getCost(): number;
}

export abstract class Toppings extends Beverage {
  item: Beverage;
  constructor(item: Beverage) {
    super();
    this.item = item;
  }
  abstract getDescription(): string;
  abstract getCost(): number;
}
