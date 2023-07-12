import { TaxInvoicePurposeType, TaxInvoiceStatus } from './enum';
import Order from './order';
import Partner from './partner';

export default interface TaxInvoice {
  id: number;
  invoicerMgtKey: string;
  purposeType: TaxInvoicePurposeType;
  ntsconfirmNum: string | null;
  status: TaxInvoiceStatus;
  writeDate: string;
  issuedDate: string | null;
  sendedDate: string | null;
  // 공급자
  dstCompanyRegistrationNumber: string;
  dstCompanyName: string;
  dstCompanyRepresentative: string;
  dstCompanyAddress: string;
  dstCompanyBizType: string;
  dstCompanyBizItem: string;
  dstEmail: string;
  // 공급받는자
  partner: Partner;
  srcCompanyRegistrationNumber: string;
  srcCompanyName: string;
  srcCompanyRepresentative: string;
  srcCompanyAddress: string;
  srcCompanyBizType: string;
  srcCompanyBizItem: string;
  srcEmail: string;
  srcEmail2: string;

  cash: number | null;
  check: number | null;
  note: number | null;
  credit: number | null;

  totalPrice: number;
  suppliedPrice: number;
  vatPrice: number;
  memo: string;
  order: Order[];
}
