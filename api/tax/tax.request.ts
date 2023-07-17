import { TaxInvoicePurposeType } from '../../models/enum';
import { PaginationQuery } from '../../models/pagination';

export type GetTaxInvoiceListQuery = PaginationQuery;

export type CreateTaxInvoiceRequest = {
  companyId: number;
  purposeType: TaxInvoicePurposeType;
  writeDate: string;
};

export type UpdateTaxInvoiceRequest = {
  purposeType: TaxInvoicePurposeType;
  writeDate: string;
  dstEmail?: string;
  srcEmail?: string;
  srcEmailName?: string;
  srcEmail2?: string;
  srcEmailName2?: string;
  memo?: string;

  cash?: number;
  check?: number;
  note?: number;
  credit?: number;
};

/** 매출 추가 */
export type AddOrderToTaxInvoiceRequest = {
  orderIds: number[];
};

/** 매출 삭제 */
export type DeleteOrderFromTaxInvoiceRequest = {
  orderIds: number[];
};
