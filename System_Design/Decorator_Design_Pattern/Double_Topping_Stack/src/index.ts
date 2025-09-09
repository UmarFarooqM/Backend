// Create a Sugar topping decorator that wraps any Beverage object and adds 10 to its cost.
// It should return the description as "<base> + Sugar".

abstract class Beverage {
  abstract getDescription(): string;

  abstract getPrice(): number;
}

class GreenTea extends Beverage {
  getDescription(): string {
    return "Green Tea";
  }
  getPrice(): number {
    return 40;
  }
}

abstract class ToppingDecorator extends Beverage {
  protected tea: Beverage;
  constructor(tea: Beverage) {
    super();
    this.tea = tea;
  }
  abstract getDescription(): string;
  abstract getPrice(): number;
}

class Sugar extends ToppingDecorator {
  getDescription(): string {
    return this.tea.getDescription() + " + Sugar";
  }
  getPrice(): number {
    return this.tea.getPrice() + 10;
  }
}

const tea = new Sugar(new Sugar(new GreenTea()));
console.log(tea.getDescription()); // Green Tea + Sugar + Sugar
console.log(tea.getPrice());        // 60


