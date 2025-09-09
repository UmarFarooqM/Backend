"use strict";
// Create a Sugar topping decorator that wraps any Beverage object and adds 10 to its cost.
// It should return the description as "<base> + Sugar".
class Beverage {
}
class GreenTea extends Beverage {
    getDescription() {
        return "Green Tea";
    }
    getPrice() {
        return 40;
    }
}
class ToppingDecorator extends Beverage {
    constructor(tea) {
        super();
        this.tea = tea;
    }
}
class Sugar extends ToppingDecorator {
    getDescription() {
        return this.tea.getDescription() + " + Sugar";
    }
    getPrice() {
        return this.tea.getPrice() + 10;
    }
}
const tea = new Sugar(new GreenTea());
console.log(tea.getDescription()); // Green Tea + Sugar
console.log(tea.getPrice()); // 50
