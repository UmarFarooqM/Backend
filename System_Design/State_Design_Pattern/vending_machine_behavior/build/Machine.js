"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(state) {
        this.state = state;
    }
    setState(state) {
        this.state = state;
    }
    moveState(coin) {
        this.state.moveState(this, coin);
    }
}
exports.VendingMachine = VendingMachine;
