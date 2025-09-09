// Problem: Create a class GreenTea that extends an abstract class Beverage.
// The abstract class has two methods: getDescription() and getCost().
//  GreenTea should return "Green Tea" and cost 40.

abstract class Beverage {
  getDescription(): void {}

  getCost(): void {}
}
class GreenTea extends Beverage{
    getDescription(): string {
        return "Green Tea" ;
    }
    getCost(): number{
        return 40 ;
    }
}
class LemonTea extends Beverage{
    getDescription(): string {
        return "Lemon Tea" ;
    }
    getCost(): number{
        return 60;
    }
}
const tea = new GreenTea();
console.log(tea.getDescription()); 
console.log(tea.getCost());        


