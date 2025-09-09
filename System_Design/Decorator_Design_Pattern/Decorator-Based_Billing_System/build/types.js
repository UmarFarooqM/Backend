"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toppings = exports.Beverage = void 0;
class Beverage {
}
exports.Beverage = Beverage;
class Toppings extends Beverage {
    constructor(item) {
        super();
        this.item = item;
    }
}
exports.Toppings = Toppings;
