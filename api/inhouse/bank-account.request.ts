import { AccountType, Bank } from '../../models/enum';
import { PaginationQuery } from '../../models/pagination';

export type BankAccountListQuery = PaginationQuery;

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
