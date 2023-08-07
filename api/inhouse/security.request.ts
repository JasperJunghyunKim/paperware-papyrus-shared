import Security from '../../models/security';
import { PaginationQuery } from '../../models/pagination';
import { Bank, SecurityType } from '../../models/enum';

export type SecurityListQuery = PaginationQuery;

/** 유가증권 등록 */
export type SecurityCreateRequest = {
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
};

export type SecurityUpdateRequest = Omit<Security, 'id'>;

export type SecurityUpdateStatusRequest = Pick<
  Security,
  'memo' | 'securityStatus'
>;
