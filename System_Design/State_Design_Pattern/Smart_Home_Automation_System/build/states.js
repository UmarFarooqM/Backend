"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrightnessAdjustmentState = exports.MotionDetectionState = exports.OnState = exports.OffState = void 0;
class OffState {
    changeLight(light) {
        console.log("Light is turned off");
        light.setState(new OffState);
    }
}
exports.OffState = OffState;
class OnState {
    changeLight(light) {
        console.log("Light is turned On");
        light.setState(new OnState);
    }
}
exports.OnState = OnState;
class MotionDetectionState {
    changeLight(light) {
        console.log("motion is detected.");
        light.setState(new OnState());
    }
}
exports.MotionDetectionState = MotionDetectionState;
class BrightnessAdjustmentState {
    constructor(time) {
        this.time = time;
    }
    changeLight(light) {
        if (this.time == "day") {
            console.log("Light brightness is reduced .");
        }
        else if (this.time == "night") {
            console.log("Light brightness is increased..");
        }
    }
}
exports.BrightnessAdjustmentState = BrightnessAdjustmentState;
