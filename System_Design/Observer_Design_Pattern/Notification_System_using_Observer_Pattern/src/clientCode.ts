import { Mobile, Tablet } from "./devices";
import { NotificationCenter } from "./types";


let notificationCenter = new NotificationCenter()

let myMobile = new Mobile()
let myTablet = new Tablet()
notificationCenter.attach(myMobile)
notificationCenter.attach(myTablet)
notificationCenter.notifyAll()

notificationCenter.detach(myMobile)
notificationCenter.notifyAll()