import { PaginationQuery } from 'src/@shared/models/pagination';

export type GetTaxInvoiceListQuery = PaginationQuery;

export type CreateTaxInvoiceRequest = {
  companyRegistrationNumber: string;
  writeDate: string;
};

export type UpdateTaxInvoiceRequest = {};
