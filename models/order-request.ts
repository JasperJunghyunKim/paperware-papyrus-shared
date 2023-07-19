import { Location, OrderRequestItem } from '.';

interface Company {
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
}

export default interface OrderRequest {
  id: number;
  srcCompany: Company;
  dstCompany: Company;
  ordererName: string;
  ordererPhoneNo: string;
  location: Location;
  wantedDate: string;
  memo: string;
  orderRequestItems: OrderRequestItem[];
}
