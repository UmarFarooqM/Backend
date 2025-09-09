

abstract class Beverage {
  abstract getDescription(): string;
  abstract getPrice(): number;
}
class Coffee extends Beverage {
  getDescription(): string {
    return "Coffee";
  }
  getPrice(): number {
    return 50;
  }
}

class GreenTea extends Beverage {
  getDescription(): string {
    return "GreenTea";
  }
  getPrice(): number {
    return 40;
  }
}

abstract class ToppingDecorator extends Beverage {
  protected teaType: Beverage;
  constructor(teaType: Beverage) {
    super();
    this.teaType = teaType;
  }
  abstract getDescription(): string;
  abstract getPrice(): number;
}

class Sugar extends ToppingDecorator {
  getDescription(): string {
    return this.teaType.getDescription() + " + Sugar";
  }
  getPrice(): number {
    return this.teaType.getPrice() + 15;
  }
}

class Honey extends ToppingDecorator {
  getDescription(): string {
    return this.teaType.getDescription() + " + Honey";
  }
  getPrice(): number {
    return this.teaType.getPrice() + 15;
  }
}

class WhippedCream extends ToppingDecorator {
  getDescription(): string {
    return this.teaType.getDescription() + " + WhippedCream";
  }
  getPrice(): number {
    return this.teaType.getPrice() + 15;
  }
}


let myTea = new WhippedCream(new Honey(new Sugar(new Coffee)))
console.log(myTea.getDescription());
console.log(myTea.getPrice());