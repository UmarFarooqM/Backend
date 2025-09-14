"use strict";
// import { Elevator } from "../Elevator";
// import { IElevatorState } from "../IElevatorState";
// import { CloseState } from "./closeState";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovingState = void 0;
const closeState_1 = require("./closeState");
class MovingState {
    moveTofloor(elevator, floor) {
        console.log(`Elevator is moving from floor ${elevator.currentFloor} to ${floor}...`);
        let step = elevator.currentFloor > floor ? -1 : 1;
        let distance = Math.abs(floor - elevator.currentFloor);
        for (let i = 0; i < distance; i++) {
            elevator.currentFloor += step;
            console.log(`Elevator is at floor ${elevator.currentFloor}`);
        }
        console.log(`Elevator arrived at floor ${floor}.`);
        elevator.updateDisplay();
        elevator.state = new closeState_1.CloseState();
    }
    openDoor(elevator) {
        console.log("Cannot open doors while elevator is moving");
    }
    closeDoor(elevator) {
        console.log("Doors are already closed while moving");
    }
}
exports.MovingState = MovingState;
