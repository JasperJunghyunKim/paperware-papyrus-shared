import { ShippingType } from '../../models/enum';
import { PaginationQuery } from '../../models/pagination';

export type ShippingListQuery = PaginationQuery & {
  // WAIT_SHIPPING | ON_SHIPPING | DONE_SHIPPING
  invoiceStatus?: string;
};

export interface ShippingCreateRequest {
  type: ShippingType;
  userId?: number;
  companyRegistrationNumber?: string;
  price?: number;
  memo?: string;
}

export interface ShippingConnectInvoicesRequest {
  invoiceIds: number[];
}
