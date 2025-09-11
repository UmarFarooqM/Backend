"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieScript = void 0;
const draftState_1 = require("./states/draftState");
class MovieScript {
    constructor(state) {
        this.state = new draftState_1.DraftState();
    }
    setState(state) {
        this.state = state;
    }
    publish(user) {
        this.state.publish(this, user);
    }
}
exports.MovieScript = MovieScript;
