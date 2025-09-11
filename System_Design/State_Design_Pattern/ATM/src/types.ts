// A bank's ATM is implemented using the State Pattern, but it's not functioning correctly. The ATM should have the following states:

// Idle – Waiting for a user.
// Card Inserted – Waiting for PIN entry.
// Authenticated – Allowing cash withdrawal.
// Dispensing Cash – Dispensing money.
// Idle (again) – Returning to the starting state after a transaction.

export interface ATMState {
  process(stage: PaymentProcess): void;
}

export class PaymentProcess {
  state: ATMState;
  constructor(state: ATMState) {
    this.state = state;
  }
  setState(state: ATMState) {
    this.state = state;
  }
  process(): void {
    this.state.process(this);
  }
}
