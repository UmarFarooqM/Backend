"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenState = void 0;
const closeState_1 = require("./closeState");
class OpenState {
    moveTofloor(elevator, floor) {
        console.log("Cannot move elevator while doors are open.");
    }
    openDoor(elevator) {
        console.log("Door is already opened.");
    }
    closeDoor(elevator) {
        console.log("Doors are closing");
        elevator.isOpened = false;
        elevator.state = new closeState_1.CloseState();
    }
}
exports.OpenState = OpenState;
