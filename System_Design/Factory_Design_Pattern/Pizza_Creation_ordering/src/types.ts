export interface Pizza{
    prepare():void ;
    bake():void;
    cut():void;
    box():void;
}

export abstract class PizzaFactory {
    abstract createPizza(type:string):Pizza
    orderPizza(type:string):void{
        let pizza = this.createPizza(type) 
        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()
    }
}