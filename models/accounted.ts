import ByBankAccount from './by-bank-account';
import ByCard from './by-card';
import ByCash from './by-cash';
import ByEtc from './by-etc';
import ByOffSet from './by-offset';
import BySecurity from './by-security';
import { AccountedType, Method, Subject } from './enum';

export default interface Accounted {
  id: number;
  companyRegistrationNumber: string;
  accountedType: AccountedType;
  accountedDate: string;
  accountedMethod: Method;
  accountedSubject: Subject;
  amount: number;
  memo: string;
  byBankAccount: ByBankAccount | null;
  byCard: ByCard | null;
  byCash: ByCash | null;
  bySecurity: BySecurity | null;
  byOffset: ByOffSet | null;
  byEtc: ByEtc | null;
}
