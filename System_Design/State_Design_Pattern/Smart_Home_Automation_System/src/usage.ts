import { OnState } from "./states";
import { SmartLight } from "./types";


let smartLight = new SmartLight(new OnState())
smartLight.changeLight()
smartLight.changeLight()