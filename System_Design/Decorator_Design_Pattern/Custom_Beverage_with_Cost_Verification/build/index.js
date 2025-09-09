"use strict";

class Beverage {
}
class Coffee extends Beverage {
    getDescription() {
        return "Coffee";
    }
    getPrice() {
        return 50;
    }
}
class GreenTea extends Beverage {
    getDescription() {
        return "GreenTea";
    }
    getPrice() {
        return 40;
    }
}
class ToppingDecorator extends Beverage {
    constructor(teaType) {
        super();
        this.teaType = teaType;
    }
}
class Sugar extends ToppingDecorator {
    getDescription() {
        return this.teaType.getDescription() + " + Sugar";
    }
    getPrice() {
        return this.teaType.getPrice() + 15;
    }
}
class Honey extends ToppingDecorator {
    getDescription() {
        return this.teaType.getDescription() + " + Honey";
    }
    getPrice() {
        return this.teaType.getPrice() + 15;
    }
}
class WhippedCream extends ToppingDecorator {
    getDescription() {
        return this.teaType.getDescription() + " + WhippedCream";
    }
    getPrice() {
        return this.teaType.getPrice() + 15;
    }
}
let myTea = new WhippedCream(new Honey(new Sugar(new Coffee)));
console.log(myTea.getDescription());
console.log(myTea.getPrice());
