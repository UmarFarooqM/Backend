import { MovieScript } from "./document";
import { DraftState } from "./states/draftState";
import { User } from './user';


let admin = new User("admin")
let editor = new User("editor")

let movieScript = new MovieScript(new DraftState())
movieScript.publish(editor) 
movieScript.publish(admin)
movieScript.publish(admin)