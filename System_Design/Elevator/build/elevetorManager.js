"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElevatorManager = void 0;
const Elevator_1 = require("./Elevator");
const ClosestElevator_1 = require("./Selectors.ts/ClosestElevator");
class ElevatorManager {
    constructor(numFloors, numElevators) {
        this.numFloors = numFloors;
        this.selector = new ClosestElevator_1.ClosestElevator();
        this.elevators = [];
        for (let i = 0; i < numElevators; i++) {
            this.elevators.push(new Elevator_1.Elevator());
        }
    }
    updateDisplay() {
        for (let elvator of this.elevators) {
            elvator.updateDisplay();
        }
    }
    requestElevator(request) {
        let elevator = this.selector.selectElevator(this.elevators, request);
        if (elevator) {
            elevator.enqueue(request.currentFloor);
            elevator.enqueue(request.destinationFloor);
        }
        else
            console.log("No Elevator is found");
        return elevator;
    }
}
exports.ElevatorManager = ElevatorManager;
