"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablet = exports.Mobile = void 0;
class Mobile {
    constructor() {
        this.name = "SmartPhone";
    }
    update() {
        console.log("Smartphone received notification");
    }
}
exports.Mobile = Mobile;
class Tablet {
    constructor() {
        this.name = "Tablet";
    }
    update() {
        console.log("Tablet received notification");
    }
}
exports.Tablet = Tablet;
