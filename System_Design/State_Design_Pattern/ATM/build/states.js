"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardInserted = exports.Authenticated = exports.DispensingCash = exports.Idle = void 0;
class Idle {
    process(stage) {
        console.log("Waiting for user");
        stage.setState(new CardInserted());
    }
}
exports.Idle = Idle;
class CardInserted {
    process(stage) {
        console.log("Card Inserted , Waiting for PIN entry.");
        stage.setState(new Authenticated());
    }
}
exports.CardInserted = CardInserted;
class Authenticated {
    process(stage) {
        console.log("Allowing cash withdrawal.");
        stage.setState(new DispensingCash());
    }
}
exports.Authenticated = Authenticated;
class DispensingCash {
    process(stage) {
        console.log("Dispensing money.");
        stage.setState(new Idle());
    }
}
exports.DispensingCash = DispensingCash;
