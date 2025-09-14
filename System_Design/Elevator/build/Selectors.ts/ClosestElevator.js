"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosestElevator = void 0;
const direction_1 = require("../direction");
class ClosestElevator {
    selectElevator(elevators, request) {
        let bestElevator = null;
        let minDistance = Infinity;
        for (let elevator of elevators) {
            let dist = Math.abs(elevator.currentFloor - request.currentFloor);
            if (elevator.direction == request.direction ||
                elevator.direction == direction_1.Direction.IDLE) {
                minDistance = dist;
                bestElevator = elevator;
            }
        }
        return bestElevator;
    }
}
exports.ClosestElevator = ClosestElevator;
