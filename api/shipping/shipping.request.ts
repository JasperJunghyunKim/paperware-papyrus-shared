import { ShippingType } from '../../models/enum';
import { PaginationQuery } from '../../models/pagination';

export type ShippingListQuery = PaginationQuery & {
  // WAIT_SHIPPING | ON_SHIPPING | DONE_SHIPPING
  invoiceStatus?: string;
  // INHOUSE | OUTSOURCE | PARTNER_PICKUP
  types?: string;
  shippingNo?: string;
  managerIds?: string;
  partnerCompanyRegistrationNumbers?: string;
  memo?: string;
  minCreatedAt?: string;
  maxCreatedAt?: string;
};

export interface ShippingCreateRequest {
  type: ShippingType;
  managerId?: number;
  companyRegistrationNumber?: string;
  price?: number;
  memo?: string;
}

export interface ShippingConnectInvoicesRequest {
  invoiceIds: number[];
}

/** 배송정보 수정 */
export interface ShippingUpdateRequest {
  companyRegistrationNumber?: string;
  price: number;
  memo?: string;
}

/** 담당자 배정 */
export interface ShippingAssignMangerRequest {
  managerId: number;
}
