import { PaginationQuery } from '../../models/pagination';

export type VirtualCompanyListQuery = PaginationQuery;

export interface VirtualCompanyCreateRequest {
  businessName: string;
  companyRegistrationNumber: string;
  invoiceCode: string;
  representative: string;
  bizType: string;
  bizItem: string;
  address: string;
  phoneNo: string;
  faxNo: string;
}

export type VirtualCompanyUpdateRequest = VirtualCompanyCreateRequest;
