import { PaginationQuery } from '../../models/pagination';

export interface BusinessRelationshipListQuery extends PaginationQuery {
  srcCompanyId: number;
  dstCompanyId: number;
}

export interface BusinessRelationshipCreateRequest {
  srcCompanyId: number;
  dstCompanyId: number;
}

export type BusinessRelationshipCompactListQuery = PaginationQuery;

export interface SearchPartnerRequest {
  companyRegistrationNumber: string;
}

export interface RegisterPartnerRequest {
  companyRegistrationNumber: string;
  create: boolean;
  type: 'PURCHASE' | 'SALES' | 'BOTH';
  partnerNickname: string;
  businessName: string;
  bizType: string;
  bizItem: string;
  invoiceCode: string;
  creditLimit: number;
  address: string;
  phoneNo: string;
  faxNo: string;
  representative: string;
  memo: string;
  partnerTaxManager: {
    name: string;
    phoneNo: string;
    email: string;
    isDefault: boolean;
  }[];
}

export interface BusinessRelationshipRequestRequest {
  targetCompanyId: number;
  type: 'PURCHASE' | 'SALES' | 'BOTH' | 'NONE';
}

export interface UpsertPartnerRequest {
  companyRegistrationNumber: string;
  partnerNickname: string;
  creditLimit: number;
  memo: string;
  partnerTaxManager: {
    name: string;
    phoneNo: string;
    email: string;
    isDefault: boolean;
  }[];
}
