// Design a Traffic Light System using the State Design Pattern. The traffic light should have three states:

// Red – Vehicles must stop.
// Yellow – Vehicles should slow down.
// Green – Vehicles can move.
// The light transitions from Red → Green → Yellow → Red in a loop.
// Implement a TrafficLight class that handles these transitions appropriately.

class TrafficState {
  handleVehicle(light: TrafficLight): void {}
}
class RedState extends TrafficState {
  handleVehicle(light: TrafficLight): void {
    console.log(`Red : Vehicle must stop`);
    light.setState(new GreenState())
  }
}
class YellowState extends TrafficState {
  handleVehicle(light: TrafficLight): void {
    console.log("Yellow : Vehicle should slow down");
    light.setState(new RedState())
  }
}
class GreenState extends TrafficState {
  handleVehicle(light: TrafficLight): void {
    console.log("Green : Vehicle can move");
    light.setState(new YellowState())
  }
}

class TrafficLight {
  trafficState: TrafficState;
  constructor(trafficState: TrafficState) {
    this.trafficState = trafficState;
  }
  setState(trafficState: TrafficState) {
    this.trafficState = trafficState;
  }
  handleVehicle() {
    this.trafficState.handleVehicle(this);
  }
}

let trafficLight = new TrafficLight(new RedState())
for(let i=0;i<10;i++){
  trafficLight.handleVehicle()
}

