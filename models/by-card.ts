import BankAccount from './bank-account';
import Card from './card';
import { AccountedType, Bank, CardCompany, Method, Subject } from './enum';

export default interface ByCard {
  amount: number;
  card: Card | null;
  bankAccount: BankAccount | null;
}
