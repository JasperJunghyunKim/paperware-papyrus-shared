import { OrderRequestItem } from '.';

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

interface Location {
  id: number;
  name: string;
  isPublic: boolean;
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
