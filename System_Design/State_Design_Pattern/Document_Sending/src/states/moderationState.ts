import { MovieScript } from "../document";
import { DocumentState, IDocument } from "../types";
import { User } from "../user";
import { PubishState } from "./publishState";


export class ModerationState implements DocumentState{
    publish(document: MovieScript, user: User): void {
        console.log(`Document sent for Published by ${user.role}`)
        document.setState(new PubishState())
    }
}