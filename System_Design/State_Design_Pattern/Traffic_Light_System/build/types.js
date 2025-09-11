"use strict";
// Design a Traffic Light System using the State Design Pattern. The traffic light should have three states:
// Red – Vehicles must stop.
// Yellow – Vehicles should slow down.
// Green – Vehicles can move.
// The light transitions from Red → Green → Yellow → Red in a loop.
// Implement a TrafficLight class that handles these transitions appropriately.
class TrafficState {
    handleVehicle(light) { }
}
class RedState extends TrafficState {
    handleVehicle(light) {
        console.log(`Vehicle must stop`);
        light.setState(new Green());
    }
}
class YellowState extends TrafficState {
    handleVehicle(light) {
        console.log("Vehicle should slow down");
        light.setState(new RedState());
    }
}
class Green extends TrafficState {
    handleVehicle(light) {
        console.log("Vehicle can move");
        light.setState(new YellowState());
    }
}
class TrafficLight {
    constructor(trafficState) {
        this.trafficState = trafficState;
    }
    setState(trafficState) {
        this.trafficState = trafficState;
    }
    handleVehicle() {
        this.trafficState.handleVehicle(this);
    }
}
let trafficLight = new TrafficLight(new RedState());
trafficLight.handleVehicle();
trafficLight.handleVehicle();
trafficLight.handleVehicle();
trafficLight.handleVehicle();
