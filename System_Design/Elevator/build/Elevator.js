"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elevator = void 0;
const direction_1 = require("./direction");
const closeState_1 = require("./states.ts/closeState");
class Elevator {
    constructor() {
        this.elevatorQueue = [];
        this.isProcessing = false;
        this.isOpened = false;
        this.capacity = 0;
        this.currentFloor = 1;
        this.direction = direction_1.Direction.IDLE;
        this.state = new closeState_1.CloseState();
    }
    enqueue(floor) {
        if (!this.elevatorQueue.includes(floor)) {
            this.elevatorQueue.push(floor);
            this.process();
        }
    }
    process() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isProcessing) {
                return;
            }
            this.isProcessing = true;
            while (this.elevatorQueue.length > 0) {
                let next = this.elevatorQueue.shift();
                if (next) {
                    let floor = next;
                    this.state.moveTofloor(this, floor);
                    this.openDoor();
                    yield new Promise((res) => setTimeout(res, 2000));
                    this.closeDoor();
                }
            }
            this.isProcessing = false;
            this.direction = direction_1.Direction.IDLE;
        });
    }
    moveTofloor(floor) {
        this.state.moveTofloor(this, floor);
    }
    openDoor() {
        this.state.openDoor(this);
    }
    closeDoor() {
        this.state.closeDoor(this);
    }
    updateDisplay() {
        console.log(`Elevator is at ${this.currentFloor} , Direction is ${this.direction}`);
    }
}
exports.Elevator = Elevator;
