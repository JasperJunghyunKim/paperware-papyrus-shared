import { PaginationQuery } from '../../models/pagination';

export type ShippingListQuery = PaginationQuery;

export interface ShippingCreateRequest {}

export interface ShippingConnectInvoicesRequest {
  invoiceIds: number[];
}
