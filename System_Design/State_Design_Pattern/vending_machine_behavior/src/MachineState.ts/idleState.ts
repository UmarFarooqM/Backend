import { VendingMachine } from "../Machine";
import { MachineState } from "../types";
import { ProcessState } from "./ProcessState";

export class IdleState extends MachineState{
    moveState(machine: VendingMachine, coin: number): void {
        console.log(`Machine Moves to the processing state`);
        machine.setState(new ProcessState())
    }
}