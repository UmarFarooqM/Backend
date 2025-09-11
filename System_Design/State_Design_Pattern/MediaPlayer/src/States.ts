import { MediaPlayer, MediaState } from "./types";

class PlayState implements MediaState {
  play(player: MediaPlayer): void {
    console.log("Playing is Started");
  }
  pause(player: MediaPlayer): void {
    console.log("media player is paused");
    player.setState(new PauseState());
  }
  stop(player: MediaPlayer): void {
    console.log("Player is stopped");
    player.setState(new StopState());
  }
}

class PauseState implements MediaState {
  play(player: MediaPlayer): void {
    console.log("Player is Resumed");
    player.setState(new PlayState());
  }
  pause(player: MediaPlayer): void {
    console.log("Player is paused");
  }
  stop(player: MediaPlayer): void {
    console.log("player is stopped");
    player.setState(new StopState());
  }
}

class StopState implements MediaState {
  play(player: MediaPlayer): void {
    console.log("player is started");
    player.setState(new PlayState());
  }
  pause(player: MediaPlayer): void {
    console.log("can't pause in the stop state");
  }
  stop(player: MediaPlayer): void {
    console.log("player is already stopped");
  }
}

export { PlayState, StopState, PauseState };
