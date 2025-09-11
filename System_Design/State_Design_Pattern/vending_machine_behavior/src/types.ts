// You are building a simple vending machine that can be in three states: Idle, Processing, and Dispensing.

// The machine starts in the Idle state.
// When a user inserts a coin, it moves to the Processing state.
// When a selection is made, it moves to the Dispensing state.
// After dispensing, it returns to the Idle state.
// Implement a basic State Design Pattern to model this vending machine behavior.
// Ensure that state transitions are correctly handled through a VendingMachine class.
export interface Machine {
  state: MachineState;
}
export class MachineState {
  moveState(mechine: Machine, coin: number): void{}
}
