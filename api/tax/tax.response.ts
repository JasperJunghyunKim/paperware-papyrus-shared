import { Order } from '../../models';
import { Model } from '../..';
import { PaginationResponse } from '../../models/pagination';

export type GetTaxInvoiceListResponse = PaginationResponse<Model.TaxInvoice>;
export type GetTaxInvoiceItemResponse = Model.TaxInvoice;

export type CreateTaxInvoiceResponse = {
  id: number;
};

export type UpdateTaxInvoiceResponse = {
  id: number;
};

/** 등록된 매출 목록 */
export type TaxInvoiceOrderListResponse = PaginationResponse<Order>;

/** 세금계산서 발행 */
export type TaxInvoiceIssueResponse = {
  certUrl: string | null;
};
