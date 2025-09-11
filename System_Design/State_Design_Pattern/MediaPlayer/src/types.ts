// Design a Media Player using the State Pattern that supports the following operations:

// Play State: If the player is in this state, it should allow playing media.
// Pause State: If paused, the player can either resume playing or be stopped.
// Stop State: If stopped, media can only be played again from the beginning.
// Your implementation should have a MediaPlayer class with state transitions based on user actions (play(), pause(), stop()).

export interface MediaState {
  play(player: MediaPlayer): void;
  pause(player: MediaPlayer): void;
  stop(player: MediaPlayer): void;
}

export class MediaPlayer {
  state: MediaState;
  constructor(state: MediaState) {
    this.state = state;
  }
  setState(state: MediaState) {
    this.state = state;
  }
  play(): void {
    this.state.play(this);
  }
  pause(): void {
    this.state.pause(this);
  }
  stop(): void {
    this.state.stop(this);
  }
}
