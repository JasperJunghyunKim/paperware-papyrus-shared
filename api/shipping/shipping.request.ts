import { PaginationQuery } from '../../models/pagination';

export type ShippingListQuery = PaginationQuery & {
  // WAIT_SHIPPING | ON_SHIPPING | DONE_SHIPPING
  invoiceStatus?: string;
};

export interface ShippingCreateRequest {}

export interface ShippingConnectInvoicesRequest {
  invoiceIds: number[];
}
