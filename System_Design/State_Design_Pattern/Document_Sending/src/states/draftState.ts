import { MovieScript } from "../document";
import { DocumentState, IDocument } from "../types";
import { User } from "../user";
import { ModerationState } from "./moderationState";

export class DraftState implements DocumentState {
  publish(document: MovieScript, user: User): void {
    console.log(`Document Sent for moderation by ${user.role}`);
    document.setState(new ModerationState());
  }
}
