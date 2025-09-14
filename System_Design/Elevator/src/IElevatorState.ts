import { Elevator } from "./Elevator";

export interface IElevatorState {
  moveTofloor(elevator: Elevator, floor: number): void;
  openDoor(elevator: Elevator): void;
  closeDoor(elevator: Elevator): void;
}
