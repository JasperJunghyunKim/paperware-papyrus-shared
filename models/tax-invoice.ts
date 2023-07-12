import { TaxInvoicePurposeType, TaxInvoiceStatus } from './enum';
import Order from './order';
import Partner from './partner';

export default interface TaxInvoice {
  id: number;
  companyRegistrationNumber: string;
  invoicerMgtKey: string;
  purposeType: TaxInvoicePurposeType;
  ntsconfirmNum: string | null;
  status: TaxInvoiceStatus;
  writeDate: string;
  issuedDate: string | null;
  sendedDate: string | null;
  partner: Partner;
  totalPrice: number;
  suppliedPrice: number;
  vatPrice: number;
  memo: string;
  dstEmail: string;
  srcEmail: string;
  srcEmail2: string;
  order: Order[];
}
