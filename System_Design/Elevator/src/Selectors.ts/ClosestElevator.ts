import { Direction } from "../direction";
import { Elevator } from "../Elevator";
import { ElevatorRequest } from "../elevatorRequest";
import { ElevatorSelector } from "../elevatorSelector";

export class ClosestElevator implements ElevatorSelector {
  selectElevator(
    elevators: Elevator[],
    request: ElevatorRequest
  ): Elevator | null {
    let bestElevator: Elevator | null = null;
    let minDistance = Infinity;
    for (let elevator of elevators) {
      let dist = Math.abs(elevator.currentFloor - request.currentFloor);
      if (
        elevator.direction == request.direction ||
        elevator.direction == Direction.IDLE
      ) {
        minDistance = dist;
        bestElevator = elevator;
      }
    }
    return bestElevator;
  }
}
