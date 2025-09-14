// import { Elevator } from "../Elevator";
// import { IElevatorState } from "../IElevatorState";
// import { CloseState } from "./closeState";


// export class MovingState implements IElevatorState{
//     moveTofloor(elevator: Elevator, floor: number): void {
//        console.log("Elevator is already moving");
//     }
//     openDoor(elevator: Elevator): void {
//        console.log("Cannot open doors while elevator is moving");
//     }
//     closeDoor(elevator: Elevator): void {
//         console.log("Doors are already closed");
//         elevator.isOpened = false ;
//         elevator.state = new CloseState()
//     }

// }

import { Elevator } from "../Elevator";
import { IElevatorState } from "../IElevatorState";
import { CloseState } from "./closeState";

export class MovingState implements IElevatorState {
  moveTofloor(elevator: Elevator, floor: number): void {
    console.log(`Elevator is moving from floor ${elevator.currentFloor} to ${floor}...`);
    let step = elevator.currentFloor > floor ? -1 : 1;
    let distance = Math.abs(floor - elevator.currentFloor);

    for (let i = 0; i < distance; i++) {
      elevator.currentFloor += step;
      console.log(`Elevator is at floor ${elevator.currentFloor}`);
    }

    console.log(`Elevator arrived at floor ${floor}.`);
    elevator.updateDisplay();
    elevator.state = new CloseState();
  }

  openDoor(elevator: Elevator): void {
    console.log("Cannot open doors while elevator is moving");
  }

  closeDoor(elevator: Elevator): void {
    console.log("Doors are already closed while moving");
  }
}
