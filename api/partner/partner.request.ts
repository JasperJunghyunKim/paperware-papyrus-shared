import { PaginationQuery } from '../../models/pagination';

export type PartnerQuery = PaginationQuery;

/** 세금계산서 담당자 추가 */
export type PartnerTaxManagerCreateRequest = {
  companyRegistrationNumber: string;
  name: string;
  phoneNo: string;
  email: string;
  isDefault: boolean;
};

/** 세금계산서 담당자 수정 */
export type PartnerTaxManagerUpdateRequest = {
  name: string;
  phoneNo: string;
  email: string;
  isDefault: boolean;
};
