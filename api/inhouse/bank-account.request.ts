import { AccountType, Bank } from 'src/@shared/models/enum';
import BankAccount from '../../models/bank-account';
import { PaginationQuery } from '../../models/pagination';

export type BankAccountQuery = PaginationQuery;

/** 계좌 등록 */
export type BankAccountCreateRequest = {
  bank: Bank;
  accountName: string;
  accountType: AccountType;
  accountNumber: string;
  accountHolder: string;
};

/** 계좌 수정 */
export type BankAccountUpdateRequest = {
  accountName: string;
};
