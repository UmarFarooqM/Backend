import { ATMState, PaymentProcess } from "./types";

class Idle implements ATMState {
  process(stage: PaymentProcess): void {
    console.log("Waiting for user");
    stage.setState(new CardInserted());
  }
}

class CardInserted implements ATMState {
  process(stage: PaymentProcess): void {
    console.log("Card Inserted , Waiting for PIN entry.");
    stage.setState(new Authenticated());
  }
}

class Authenticated implements ATMState {
  process(stage: PaymentProcess): void {
    console.log("Allowing cash withdrawal.");
    stage.setState(new DispensingCash());
  }
}
class DispensingCash implements ATMState {
  process(stage: PaymentProcess): void {
    console.log("Dispensing money.");
    stage.setState(new Idle());
  }
}

export { Idle, DispensingCash, Authenticated, CardInserted };
