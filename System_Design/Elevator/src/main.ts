import { ElevatorRequest } from "./elevatorRequest";
import { ElevatorManager } from "./elevetorManager";


let elevatorManger  = new ElevatorManager(50,4)
let request1 = new ElevatorRequest(30,1)
let elevator = elevatorManger.requestElevator(request1)
