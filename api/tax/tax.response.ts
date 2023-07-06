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
