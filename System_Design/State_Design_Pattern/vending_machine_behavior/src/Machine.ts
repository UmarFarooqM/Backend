import { Machine, MachineState } from "./types";

export class VendingMachine implements Machine {
  state: MachineState;
  constructor(state: MachineState) {
    this.state = state;
  }
  setState(state: MachineState) {
    this.state = state;
  }
  moveState(coin: number): void {
    this.state.moveState(this, coin);
  }
}
