import { LightState, SmartLight } from "./types";

class OffState implements LightState {
  changeLight(light: SmartLight): void {
    console.log("Light is turned off");
    light.setState(new OffState)
  }
}

class OnState implements LightState {
  changeLight(light: SmartLight): void {
    console.log("Light is turned On");
    light.setState(new OnState)
  }
}

class MotionDetectionState implements LightState {
  changeLight(light: SmartLight): void {
    console.log("motion is detected.");
    light.setState(new OnState());
  }
}

class BrightnessAdjustmentState implements LightState {
  time: string;
  constructor(time: "day" | "night") {
    this.time = time;
  }
  changeLight(light: SmartLight): void {
    if (this.time == "day") {
      console.log("Light brightness is reduced .");
    } else if (this.time == "night") {
      console.log("Light brightness is increased..");
    }
  }
}

export { OffState, OnState, MotionDetectionState, BrightnessAdjustmentState };
