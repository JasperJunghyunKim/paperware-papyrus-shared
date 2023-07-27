import { Company } from '.';
import { InvoiceStatus, ShippingStatus } from './enum';

export default interface ShippingItem {
  id: number;
  shippingNo: string;
  status: ShippingStatus;
  company: Company;
  invoiceCount: number;
  invoice: {
    invoiceStatus: InvoiceStatus;
  }[];
}
