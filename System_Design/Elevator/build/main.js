"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elevatorRequest_1 = require("./elevatorRequest");
const elevetorManager_1 = require("./elevetorManager");
let elevatorManger = new elevetorManager_1.ElevatorManager(50, 4);
let request1 = new elevatorRequest_1.ElevatorRequest(30, 1);
let elevator = elevatorManger.requestElevator(request1);
