import { VendingMachine } from "../Machine";
import {  MachineState } from "../types";
import { IdleState } from "./idleState";

export class DispensingState extends MachineState {
  moveState(machine: VendingMachine, coin: number): void {
    console.log("Machine is moves to idle state");
    machine.setState(new IdleState());
  }
}
