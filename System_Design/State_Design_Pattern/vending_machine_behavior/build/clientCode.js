"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Machine_1 = require("./Machine");
const idleState_1 = require("./MachineState.ts/idleState");
let vendingMachine = new Machine_1.VendingMachine(new idleState_1.IdleState());
vendingMachine.moveState(5);
vendingMachine.moveState(4);
vendingMachine.moveState(5);
vendingMachine.moveState(8);
