import { Location, OrderRequest, OrderRequestItem } from '../../models';
import { PaginationResponse } from '../../models/pagination';

export type OrderRequestItemListResponse = PaginationResponse<
  OrderRequestItem & {
    orderRequest: {
      id: number;
      srcCompany: {
        id: number;
        businessName: string;
        companyRegistrationNumber: string;
        phoneNo: string;
        faxNo: string;
        representative: string;
        invoiceCode: string;
        bizType: string;
        bizItem: string;
        address: string;
      };
      dstCompany: {
        id: number;
        businessName: string;
        companyRegistrationNumber: string;
        phoneNo: string;
        faxNo: string;
        representative: string;
        invoiceCode: string;
        bizType: string;
        bizItem: string;
        address: string;
      };
      ordererName: string;
      ordererPhoneNo: string;
      location: {
        id: number;
        name: string;
        isPublic: boolean;
        address: string;
      } | null;
      wantedDate: string | null;
      memo: string;
      createdAt: string;
    };
  }
>;

/** 퀵주문 상세 */
export type OrderRequestResponse = OrderRequest;
