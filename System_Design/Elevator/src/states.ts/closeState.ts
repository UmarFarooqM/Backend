// import { Direction } from "../direction";
// import { Elevator } from "../Elevator";
// import { IElevatorState } from "../IElevatorState";
// import { MovingState } from "./movingState";
// import { OpenState } from "./openState";

// export class CloseState implements IElevatorState {
//   moveTofloor(elevator: Elevator, floor: number): void {
//     elevator.direction =
//       elevator.currentFloor > floor ? Direction.DOWN : Direction.UP;
//     let distance = Math.abs(floor - elevator.currentFloor);
//     elevator.state = new MovingState()
//     let step = elevator.currentFloor > floor ? -1 : 1;

//     for (let i = 0; i < distance + 1; i++) {
//       elevator.currentFloor += step;
//       console.log(`Elevator is in ${elevator.currentFloor} floor.`);
//       if ((elevator.currentFloor = floor)) {
//         console.log(`Elevator is arrived at ${floor} floor.`);
//         elevator.state = new CloseState()
//         elevator.updateDisplay();
//       }
//     }
//   }
//   openDoor(elevator: Elevator): void {
//     console.log("Door is opening");
//     elevator.isOpened = true;
//     elevator.state = new OpenState();
//   }
//   closeDoor(elevator: Elevator): void {
//     console.log("Doors are alresdy closed");
//     elevator.isOpened = false;
//   }
// }
import { Direction } from "../direction";
import { Elevator } from "../Elevator";
import { IElevatorState } from "../IElevatorState";
import { MovingState } from "./movingState";
import { OpenState } from "./openState";

export class CloseState implements IElevatorState {
  moveTofloor(elevator: Elevator, floor: number): void {
    if (elevator.currentFloor === floor) {
      console.log(`Elevator is already at floor ${floor}.`);
      return;
    }

    elevator.direction = elevator.currentFloor > floor ? Direction.DOWN : Direction.UP;
    elevator.state = new MovingState();
    elevator.state.moveTofloor(elevator, floor); 
  }

  openDoor(elevator: Elevator): void {
    console.log("Door is opening");
    elevator.isOpened = true;
    elevator.state = new OpenState();
  }

  closeDoor(elevator: Elevator): void {
    console.log("Doors are already closed");
  }
}
