import { Location, OrderRequestItem } from '../../models';
import { PaginationResponse } from '../../models/pagination';

export type OrderRequestListResponse = PaginationResponse<
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
    };
  }
>;
