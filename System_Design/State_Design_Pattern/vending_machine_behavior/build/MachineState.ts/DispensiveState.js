"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispensingState = void 0;
const types_1 = require("../types");
const idleState_1 = require("./idleState");
class DispensingState extends types_1.MachineState {
    moveState(machine, coin) {
        console.log("Machine is moves to idle state");
        machine.setState(new idleState_1.IdleState());
    }
}
exports.DispensingState = DispensingState;
