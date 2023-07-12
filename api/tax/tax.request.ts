import { PaginationQuery } from '../../models/pagination';

export type GetTaxInvoiceListQuery = PaginationQuery;

export type CreateTaxInvoiceRequest = {
  companyRegistrationNumber: string;
  writeDate: string;
};

export type UpdateTaxInvoiceRequest = {
  writeDate: string;
  dstEmail?: string;
  srcEmail?: string;
  srcEmail2?: string;
  memo?: string;
};

/** 매출 추가 */
export type AddOrderToTaxInvoiceRequest = {
  orderIds: number[];
};
