"use strict";
// Problem: Create a Honey topping that adds 20 to cost and returns "<base> + Honey".
// Now wrap GreenTea with one Honey and one Sugar.
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
class Honey extends ToppingDecorator {
    getDescription() {
        return this.tea.getDescription() + " + Honey";
    }
    getPrice() {
        return this.tea.getPrice() + 20;
    }
}
const tea = new Honey(new Sugar(new GreenTea()));
console.log(tea.getDescription()); // Green Tea + Sugar + Honey
console.log(tea.getPrice()); // 
