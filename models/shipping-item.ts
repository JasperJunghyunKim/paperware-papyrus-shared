import { Company } from '.';
import { InvoiceStatus, ShippingStatus, ShippingType } from './enum';

export default interface ShippingItem {
  id: number;
  type: ShippingType;
  shippingNo: string;
  status: ShippingStatus;
  company: Company;
  invoiceCount: number;
  invoiceWeight: number;
  manager: {
    id: number;
    name: string;
  } | null;
  companyRegistrationNumber: string | null;
  price: number;
  memo: string;
  createdAt: string;
  createdByUser: {
    id: number;
    name: string;
  };
  invoice: {
    invoiceStatus: InvoiceStatus;
  }[];
}
