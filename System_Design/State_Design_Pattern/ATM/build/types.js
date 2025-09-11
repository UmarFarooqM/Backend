"use strict";
// A bank's ATM is implemented using the State Pattern, but it's not functioning correctly. The ATM should have the following states:
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcess = void 0;
class PaymentProcess {
    constructor(state) {
        this.state = state;
    }
    setState(state) {
        this.state = state;
    }
    process() {
        this.state.process(this);
    }
}
exports.PaymentProcess = PaymentProcess;
