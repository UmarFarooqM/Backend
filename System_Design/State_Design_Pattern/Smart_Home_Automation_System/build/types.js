"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartLight = void 0;
class SmartLight {
    constructor(state) {
        this.state = state;
    }
    setState(state) {
        this.state = state;
    }
    changeLight() {
        this.state.changeLight(this);
    }
}
exports.SmartLight = SmartLight;
