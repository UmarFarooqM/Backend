"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PauseState = exports.StopState = exports.PlayState = void 0;
class PlayState {
    play(player) {
        console.log("Playing is Started");
    }
    pause(player) {
        console.log("media player is paused");
        player.setState(new PauseState());
    }
    stop(player) {
        console.log("Player is stopped");
        player.setState(new StopState());
    }
}
exports.PlayState = PlayState;
class PauseState {
    play(player) {
        console.log("Player is Resumed");
        player.setState(new PlayState());
    }
    pause(player) {
        console.log("Player is paused");
    }
    stop(player) {
        console.log("player is stopped");
        player.setState(new StopState());
    }
}
exports.PauseState = PauseState;
class StopState {
    play(player) {
        console.log("player is started");
        player.setState(new PlayState());
    }
    pause(player) {
        console.log("can't pause in the stop state");
    }
    stop(player) {
        console.log("player is already stopped");
    }
}
exports.StopState = StopState;
