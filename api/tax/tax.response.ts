import { Model } from 'src/@shared';
import { PaginationResponse } from 'src/@shared/models/pagination';

export type GetTaxInvoiceListResponse = PaginationResponse<Model.TaxInvoice>;
export type GetTaxInvoiceItemResponse = Model.TaxInvoice;

export type CreateTaxInvoiceResponse = {
  id: number;
};

export type UpdateTaxInvoiceResponse = {
  id: number;
};
