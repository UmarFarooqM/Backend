import { VendingMachine } from "../Machine";
import {  MachineState } from "../types";
import { DispensingState } from "./DispensiveState";

export class ProcessState extends MachineState{
    moveState(mechine: VendingMachine, coin: number): void {
        console.log(`Machine move to the Dispensing state.`);
        mechine.setState(new  DispensingState())
    }
}