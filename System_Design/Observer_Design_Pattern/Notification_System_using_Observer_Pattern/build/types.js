"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCenter = void 0;
class NotificationCenter {
    constructor() {
        this.observerList = [];
    }
    attach(observer) {
        let isExist = this.observerList.includes(observer);
        if (isExist) {
            console.log(`${observer} already subscribed`);
            return;
        }
        this.observerList.push(observer);
        console.log(`Observer Added : ${observer.name}`);
    }
    detach(observer) {
        let index = this.observerList.indexOf(observer);
        if (index == -1) {
            console.log(`${observer} already unsubscribed`);
            return;
        }
        console.log(`${observer.name} is removed .`);
        this.observerList.splice(index, 1);
    }
    notifyAll() {
        for (let device of this.observerList) {
            device.update();
        }
    }
}
exports.NotificationCenter = NotificationCenter;
