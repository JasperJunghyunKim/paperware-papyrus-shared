import { PaginationQuery } from '../../models/pagination';

export type GetTaxInvoiceListQuery = PaginationQuery;

export type CreateTaxInvoiceRequest = {
  companyRegistrationNumber: string;
  writeDate: string;
};

export type UpdateTaxInvoiceRequest = {};
