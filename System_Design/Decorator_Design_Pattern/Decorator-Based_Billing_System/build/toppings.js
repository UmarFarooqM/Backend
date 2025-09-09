"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhippedCream = exports.Honey = exports.Sugar = void 0;
const types_1 = require("./types");
// Toppings: Sugar (₹10), Honey (₹20), WhippedCream (₹15)
class Sugar extends types_1.Toppings {
    getDescription() {
        return this.item.getDescription() + " + Sugar";
    }
    getCost() {
        return this.item.getCost() + 10;
    }
}
exports.Sugar = Sugar;
class Honey extends types_1.Toppings {
    getDescription() {
        return this.item.getDescription() + " + Honey";
    }
    getCost() {
        return this.item.getCost() + 20;
    }
}
exports.Honey = Honey;
class WhippedCream extends types_1.Toppings {
    getDescription() {
        return this.item.getDescription() + " + WhippedCream";
    }
    getCost() {
        return this.item.getCost() + 15;
    }
}
exports.WhippedCream = WhippedCream;
