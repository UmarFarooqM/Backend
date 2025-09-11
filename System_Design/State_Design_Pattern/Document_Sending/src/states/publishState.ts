import { DocumentState, IDocument } from "../types";
import { User } from "../user";

export class PubishState implements DocumentState {
  publish(document: IDocument, user: User): void {
    console.log(`Document is already Published.`);
  }
}
