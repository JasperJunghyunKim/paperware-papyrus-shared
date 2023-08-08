import BankAccount from './bank-account';
import { AccountedType, Bank, Method, Subject } from './enum';

export default interface ByBankAccount {
  amount: number;
  bankAccount: BankAccount;
}
