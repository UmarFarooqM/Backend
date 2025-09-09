"use strict";

class Beverage {
    getDescription() { }
    getCost() { }
}
class GreenTea extends Beverage {
    getDescription() {
        return "Green Tea";
    }
    getCost() {
        return 40;
    }
}
class LemonTea extends Beverage {
    getDescription() {
        return "Lemon Tea";
    }
    getCost() {
        return 60;
    }
}
const tea = new GreenTea();
console.log(tea.getDescription());
console.log(tea.getCost());
