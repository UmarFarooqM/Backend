import { DraftState } from "./states/draftState";
import { DocumentState, IDocument } from "./types";
import { User } from "./user";

export class MovieScript implements IDocument {
  state: DocumentState;
  constructor(state: DocumentState) {
    this.state = new DraftState();
  }
  setState(state: DocumentState): void {
    this.state = state;
  }
  publish(user: User): void {
    this.state.publish(this, user);
  }
}
