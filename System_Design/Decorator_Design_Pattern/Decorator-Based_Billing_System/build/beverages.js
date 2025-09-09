"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LemonTea = exports.Espresso = void 0;
const types_1 = require("./types");
// Base beverages: Espresso (₹80), LemonTea (₹40)
class Espresso extends types_1.Beverage {
    getDescription() {
        return "Espresso";
    }
    getCost() {
        return 80;
    }
}
exports.Espresso = Espresso;
class LemonTea extends types_1.Beverage {
    getDescription() {
        return "LemonTea";
    }
    getCost() {
        return 40;
    }
}
exports.LemonTea = LemonTea;
