// Problem: Create a Honey topping that adds 20 to cost and returns "<base> + Honey".
// Now wrap GreenTea with one Honey and one Sugar.

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
class Honey extends ToppingDecorator {
  getDescription(): string {
    return this.tea.getDescription() + " + Honey";
  }
  getPrice(): number {
    return this.tea.getPrice() + 20;
  }
}
const tea = new Honey(new Sugar(new GreenTea()));
console.log(tea.getDescription()); // Green Tea + Sugar + Honey
console.log(tea.getPrice()); // 70
