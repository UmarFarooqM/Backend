abstract class Pizza {
  abstract getDescription(): string;
  abstract getPrice(): number;
}
// pizza-1
class FormHouse extends Pizza {
  getDescription(): string {
    return "FormHouse";
  }
  getPrice(): number {
    return 200;
  }
}
// pizza -2
class Marghreta extends Pizza {
  getDescription(): string {
    return "Marghreta";
  }
  getPrice(): number {
    return 150;
  }
}
// decorator

abstract class Toppings extends Pizza {
  // toppings is a type of pizza
  protected pizza: Pizza; // pizza not able to acceess on the client side
  constructor(pizza: Pizza) {
    super(); // need to ensure parent pizza is initialised.
    this.pizza = pizza;
  }
  abstract getDescription(): string;
  abstract getPrice(): number;
}
// topping -1
class Cheese extends Toppings {
  getDescription(): string {
    return this.pizza.getDescription() + " + Cheese";
  }
  getPrice(): number {
    return this.pizza.getPrice() + 40;
  }
}
// topping -2
class Olives extends Toppings {
  getDescription(): string {
    return this.pizza.getDescription() + " + Olives";
  }
  getPrice(): number {
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
