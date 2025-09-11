"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaFactory = void 0;
class PizzaFactory {
    orderPizza(type) {
        let pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    }
}
exports.PizzaFactory = PizzaFactory;
