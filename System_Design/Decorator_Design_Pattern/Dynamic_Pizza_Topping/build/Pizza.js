"use strict";
class Pizza {
}
// pizza-1
class FormHouse extends Pizza {
    getDescription() {
        return "FormHouse";
    }
    getPrice() {
        return 200;
    }
}
// pizza -2
class Marghreta extends Pizza {
    getDescription() {
        return "Marghreta";
    }
    getPrice() {
        return 150;
    }
}
// decorator
class Toppings extends Pizza {
    constructor(pizza) {
        super();
        this.pizza = pizza;
    }
}
// topping -1
class Cheese extends Toppings {
    getDescription() {
        return this.pizza.getDescription() + " + Cheese";
    }
    getPrice() {
        return this.pizza.getPrice() + 40;
    }
}
// topping -2
class Olives extends Toppings {
    getDescription() {
        return this.pizza.getDescription() + " + Olives";
    }
    getPrice() {
        return this.pizza.getPrice() + 30;
    }
}
let marghretaPizza = new Marghreta();
let formHousePizza = new FormHouse();
let myPizza = new Olives(new Cheese(marghretaPizza));
console.log(myPizza.getDescription());
console.log(myPizza.getPrice());
let myPizza2 = new Cheese(formHousePizza);
console.log(myPizza2.getDescription());
console.log(myPizza2.getPrice());
