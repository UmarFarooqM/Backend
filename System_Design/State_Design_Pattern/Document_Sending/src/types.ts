import { User } from "./user";

export interface IDocument{
  state: DocumentState;
}

export interface DocumentState{
    publish(document: IDocument, user: User): void;
}