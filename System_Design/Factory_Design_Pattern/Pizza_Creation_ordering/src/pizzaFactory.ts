import Margherita, { Cheese, Formhouse, Special } from "./pizza"
import { Pizza, PizzaFactory } from "./types"




export class FactoryPizza extends PizzaFactory{
    createPizza(type: string): Pizza {
        switch (type){
            case "margherita" :
                return new Margherita()
            case "formhouse":
                return new Formhouse()
            case "special" :
                return new Special()
            case "cheese" : 
                return new Cheese()
            default : 
                throw new Error("Invalid pizza type!!")
        }
    }

}