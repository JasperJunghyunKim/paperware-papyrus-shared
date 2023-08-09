import BankAccount from './bank-account';
import Card from './card';
import { AccountedType, Bank, CardCompany, Method, Subject } from './enum';

export default interface ByCard {
  cardAmount: number;
  vatPrice: number;
  amount: number;
  isCharge: boolean;
  approvalNumber: string;
  card: Card | null;
  bankAccount: BankAccount | null;
}
