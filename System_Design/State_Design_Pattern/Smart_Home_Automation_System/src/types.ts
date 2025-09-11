export interface LightState {
  changeLight(light: SmartLight): void;
}

export class SmartLight {
  state: LightState;
  constructor(state: LightState) {
    this.state = state;
  }
  setState(state: LightState) {
    this.state = state;
  }
  changeLight():void {
    this.state.changeLight(this)
  }
}
