"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdleState = void 0;
const types_1 = require("../types");
const ProcessState_1 = require("./ProcessState");
class IdleState extends types_1.MachineState {
    moveState(machine, coin) {
        console.log(`Machine Moves to the processing state`);
        machine.setState(new ProcessState_1.ProcessState());
    }
}
exports.IdleState = IdleState;
