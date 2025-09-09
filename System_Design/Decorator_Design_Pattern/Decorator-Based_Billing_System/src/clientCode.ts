import { Espresso, LemonTea } from "./beverages";
import { Honey, Sugar, WhippedCream } from "./toppings";

// Problem: Design a billing system for a café. Requirements:

// Base beverages: Espresso (₹80), LemonTea (₹40)
// Toppings: Sugar (₹10), Honey (₹20), WhippedCream (₹15)
// Users can order multiple items with different combinations.
// Each item should return: Description: <Final Description>Cost: ₹<Total>

const order1 = new Honey(new WhippedCream(new Espresso()));
const order2 = new Sugar(new Sugar(new LemonTea()));

console.log("Order 1:", order1.getDescription()); // Espresso + WhippedCream + Honey
console.log("Cost 1: ₹", order1.getCost()); // 80 + 15 + 20 = ₹115

console.log("Order 2:", order2.getDescription()); // LemonTea + Sugar + Sugar
console.log("Cost 2: ₹", order2.getCost()); // 40 + 10 + 10 = ₹60
