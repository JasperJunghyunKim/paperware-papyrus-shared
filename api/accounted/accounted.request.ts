import { PaginationQuery } from '../../models/pagination';
import { AccountedType, Subject } from '../../models/enum';

/** 수금/지급 목록 */
export type AccountedListQuery = PaginationQuery & {};

/** 수금/지급 등록 (계좌이체) */
export type AccountedByBankAccountCreatedRequest = {
  accountedType: AccountedType;
  companyRegistrationNumber: string;
  accountedDate: string;
  accountedSubject: Subject;
  amount: number;
  memo?: string;
  bankAccountId: number;
};

/** 수금/지급 등록 (현금) */
export type AccountedByCashCreatedRequest = {
  accountedType: AccountedType;
  companyRegistrationNumber: string;
  accountedDate: string;
  accountedSubject: Subject;
  amount: number;
  memo?: string;
};

/** 미수금&미지급 목록 */
export interface AccountedUnpaidListQuery extends PaginationQuery {
  accountedType: AccountedType;
  // 검색 필드
  companyRegistrationNumbers?: string;
  minAmount?: number;
  maxAmount?: number;
}
