import { Idle } from "./states";
import { PaymentProcess } from "./types";


let paymentProcess = new PaymentProcess(new Idle())
paymentProcess.process()
paymentProcess.process()
paymentProcess.process()
paymentProcess.process()
paymentProcess.process()