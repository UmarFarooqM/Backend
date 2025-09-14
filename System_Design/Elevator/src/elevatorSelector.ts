import { Elevator } from "./Elevator";
import { ElevatorRequest } from "./elevatorRequest";

export interface ElevatorSelector {
  selectElevator(elevator: Elevator[], request: ElevatorRequest): Elevator|null;
}
