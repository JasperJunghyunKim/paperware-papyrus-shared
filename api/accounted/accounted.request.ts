import { PaginationQuery } from '../../models/pagination';
import { Accounted } from '../../models';
import { AccountedType } from '../../models/enum';

export type AccountedQuery = Pick<
  Accounted,
  | 'companyId'
  | 'companyRegistrationNumber'
  | 'accountedSubject'
  | 'accountedMethod'
  | 'accountedType'
> & { accountedFromDate: string; accountedToDate: string } & PaginationQuery;

export interface AccountedUnpaidListQuery extends PaginationQuery {
  accountedType: AccountedType;
  // 검색 필드
  companyRegistrationNumbers?: string;
  minAmount?: number;
  maxAmount?: number;
}
