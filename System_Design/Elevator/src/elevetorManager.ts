import { Elevator } from "./Elevator";
import { ElevatorRequest } from "./elevatorRequest";
import { ElevatorSelector } from "./elevatorSelector";
import { ClosestElevator } from "./Selectors.ts/ClosestElevator";

export class ElevatorManager {
  numFloors: number;
  selector: ElevatorSelector;
  elevators: Elevator[];
  constructor(numFloors: number, numElevators: number) {
    this.numFloors = numFloors;
    this.selector = new ClosestElevator();
    this.elevators = [];
    for (let i = 0; i < numElevators; i++) {
      this.elevators.push(new Elevator());
    }
  }
  updateDisplay(): void {
    for (let elvator of this.elevators) {
      elvator.updateDisplay();
    }
  }
  requestElevator(request: ElevatorRequest): Elevator | null {
    let elevator = this.selector.selectElevator(this.elevators, request);
    if (elevator) {
      elevator.enqueue(request.currentFloor);
      elevator.enqueue(request.destinationFloor);
    } else console.log("No Elevator is found");
    return elevator;
  }
}
