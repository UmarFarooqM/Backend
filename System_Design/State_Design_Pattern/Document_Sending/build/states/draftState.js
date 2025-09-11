"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftState = void 0;
const moderationState_1 = require("./moderationState");
class DraftState {
    publish(document, user) {
        console.log(`Document Sent for moderation by ${user.role}`);
        document.setState(new moderationState_1.ModerationState());
    }
}
exports.DraftState = DraftState;
