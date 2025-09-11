
import { VendingMachine } from './Machine';
import { IdleState } from './MachineState.ts/idleState';

let vendingMachine = new VendingMachine(new IdleState())
vendingMachine.moveState(5)
vendingMachine.moveState(4)
vendingMachine.moveState(5)
vendingMachine.moveState(8)
