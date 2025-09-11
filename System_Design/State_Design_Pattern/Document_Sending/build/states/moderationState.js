"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModerationState = void 0;
const publishState_1 = require("./publishState");
class ModerationState {
    publish(document, user) {
        console.log(`Document sent for Published by ${user.role}`);
        document.setState(new publishState_1.PubishState());
    }
}
exports.ModerationState = ModerationState;
