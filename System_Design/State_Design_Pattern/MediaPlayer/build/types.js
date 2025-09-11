"use strict";
// Design a Media Player using the State Pattern that supports the following operations:
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPlayer = void 0;
class MediaPlayer {
    constructor(state) {
        this.state = state;
    }
    setState(state) {
        this.state = state;
    }
    play() {
        this.state.play(this);
    }
    pause() {
        this.state.pause(this);
    }
    stop() {
        this.state.stop(this);
    }
}
exports.MediaPlayer = MediaPlayer;
