"use strict";
// import { Direction } from "../direction";
// import { Elevator } from "../Elevator";
// import { IElevatorState } from "../IElevatorState";
// import { MovingState } from "./movingState";
// import { OpenState } from "./openState";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseState = void 0;
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
const direction_1 = require("../direction");
const movingState_1 = require("./movingState");
const openState_1 = require("./openState");
class CloseState {
    moveTofloor(elevator, floor) {
        if (elevator.currentFloor === floor) {
            console.log(`Elevator is already at floor ${floor}.`);
            return;
        }
        elevator.direction = elevator.currentFloor > floor ? direction_1.Direction.DOWN : direction_1.Direction.UP;
        elevator.state = new movingState_1.MovingState();
        elevator.state.moveTofloor(elevator, floor); // Delegate to MovingState
    }
    openDoor(elevator) {
        console.log("Door is opening");
        elevator.isOpened = true;
        elevator.state = new openState_1.OpenState();
    }
    closeDoor(elevator) {
        console.log("Doors are already closed");
    }
}
exports.CloseState = CloseState;
