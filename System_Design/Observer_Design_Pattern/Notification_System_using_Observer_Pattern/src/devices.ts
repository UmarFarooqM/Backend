import { Observer } from "./types";

export class Mobile implements Observer{
    name:string="SmartPhone"
    update(): void {
        console.log("Smartphone received notification");
    }
}

export class Tablet implements Observer{
    name : string = "Tablet"
    update(): void {
        console.log("Tablet received notification");
    }
}