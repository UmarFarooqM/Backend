"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElevatorRequest = void 0;
const direction_1 = require("./direction");
class ElevatorRequest {
    constructor(currentFloor, destinationFloor) {
        this.currentFloor = currentFloor;
        this.destinationFloor = destinationFloor;
        this.direction = this.destinationFloor > this.currentFloor ? direction_1.Direction.UP : direction_1.Direction.DOWN;
    }
}
exports.ElevatorRequest = ElevatorRequest;
