import { PaginationQuery } from '../../models/pagination';
import {
  AccountedType,
  Bank,
  EndorsementType,
  SecurityType,
  Subject,
} from '../../models/enum';

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

/** 수금/지급 등록 (계좌이체) */
export type AccountedBySecurityCreatedRequest = {
  accountedType: AccountedType;
  companyRegistrationNumber: string;
  accountedDate: string;
  accountedSubject: Subject;
  amount: number;
  memo?: string;
  endorsementType: EndorsementType; // 배서구분
  endorsement?: string; // 배서자
  securityId?: number; // 지급시 필수
  security?: {
    securityType: SecurityType;
    securitySerial: string;
    securityAmount: number;
    drawedDate?: string;
    drawedBank?: Bank;
    drawedBankBranch?: string;
    drawedRegion?: string;
    drawer?: string;
    maturedDate?: string;
    payingBank?: Bank;
    payingBankBranch?: string;
    payer?: string;
    memo?: string;
  }; // 수금시 필수
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

/** 수금/지급 등록 (카드입금) */
export type AccountedByCardCreatedRequest = {
  accountedType: AccountedType;
  companyRegistrationNumber: string;
  accountedDate: string;
  accountedSubject: Subject;
  cardAmount: number; // 카드입금금액
  vatPrice?: number; // 수수료
  isCharge: boolean; // 수수료 포함 여부
  memo?: string;
  approvalNumber?: string; // 승인번호
  cardId?: number; // 지급시 필수
  bankAccountId?: number; // 수금시 필수
};

/** 수금/지급 등록 (상계) */
export type AccountedByOffsetCreatedRequest = {
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
