import { Elevator } from "../Elevator";
import { IElevatorState } from "../IElevatorState";
import { CloseState } from "./closeState";

export class OpenState implements IElevatorState {
  moveTofloor(elevator: Elevator, floor: number): void {
    console.log("Cannot move elevator while doors are open.");
  }

  openDoor(elevator: Elevator): void {
    console.log("Door is already opened.");
  }

  closeDoor(elevator: Elevator): void {
    console.log("Doors are closing");
    elevator.isOpened = false;
    elevator.state = new CloseState();
  }
}
