"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pizzaFactory_1 = require("./pizzaFactory");
let pizzaFactory = new pizzaFactory_1.FactoryPizza();
pizzaFactory.orderPizza("margherita");
pizzaFactory.orderPizza("special");
