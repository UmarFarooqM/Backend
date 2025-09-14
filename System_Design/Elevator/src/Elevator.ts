import { Direction } from "./direction";
import { IElevatorState } from "./IElevatorState";
import { CloseState } from "./states.ts/closeState";

export class Elevator {
  currentFloor: number;
  direction: Direction;
  capacity: number;
  isOpened: boolean;
  elevatorQueue: number[] = [];
  isProcessing: boolean = false;
  state: IElevatorState;
  constructor() {
    this.isOpened = false;
    this.capacity = 0;
    this.currentFloor = 1;
    this.direction = Direction.IDLE;
    this.state = new CloseState();
  }
  enqueue(floor: number): void {
    if (!this.elevatorQueue.includes(floor)) {
      this.elevatorQueue.push(floor);
      this.process()
    }
  }

  async process(): Promise<void> {
    if (this.isProcessing) {
      return;
    }
    this.isProcessing = true;
    while (this.elevatorQueue.length > 0) {
      let next = this.elevatorQueue.shift();
      if (next) {
        let floor = next;
        this.state.moveTofloor(this, floor);
        this.openDoor();
        await new Promise((res) => setTimeout(res, 2000));
        this.closeDoor();
      }
    }
    this.isProcessing = false 
    this.direction = Direction.IDLE
  }

  moveTofloor(floor: number): void {
    this.state.moveTofloor(this, floor);
  }

  openDoor(): void {
    this.state.openDoor(this);
  }
  closeDoor(): void {
    this.state.closeDoor(this);
  }

  updateDisplay(): void {
    console.log(
      `Elevator is at ${this.currentFloor} , Direction is ${this.direction}`
    );
  }
}
