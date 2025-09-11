"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessState = void 0;
const types_1 = require("../types");
const DispensiveState_1 = require("./DispensiveState");
class ProcessState extends types_1.MachineState {
    moveState(mechine, coin) {
        console.log(`Machine move to the Dispensing state.`);
        mechine.setState(new DispensiveState_1.DispensingState());
    }
}
exports.ProcessState = ProcessState;
