import {
  DepositEvent,
  OrderDeposit,
  OrderEtc,
  OrderProcess,
  OrderRefund,
  OrderReturn,
  OrderStock,
  TradePrice,
} from '.';
import Company from './company';
import {
  OrderStatus,
  OrderType,
  TaxInvoicePurposeType,
  TaxInvoiceStatus,
} from './enum';

export default interface Order {
  id: number;
  orderNo: string;
  srcCompany: Company;
  dstCompany: Company;
  orderType: OrderType;
  orderDate: string;
  status: OrderStatus;
  isEntrusted: boolean;
  memo: string;
  ordererName: string;
  acceptedCompanyId: number | null;
  isStockRejected: boolean;
  orderStock: OrderStock | null;
  orderDeposit: OrderDeposit | null;
  orderProcess: OrderProcess | null;
  orderEtc: OrderEtc | null;
  orderRefund: OrderRefund | null;
  orderReturn: OrderReturn | null;
  depositEvent: DepositEvent | null;
  tradePrice: TradePrice[];
  taxInvoice: {
    id: number;
    invoicerMgtKey: string;
    purposeType: TaxInvoicePurposeType;
    ntsconfirmNum: string | null;
    status: TaxInvoiceStatus;
    writeDate: string;
    issuedDate: string | null;
    sendedDate: string | null;
  } | null;
  purchaseSuppliedPrice?: number | null;
  salesSuppliedPrice?: number | null;
  salesProfit?: number | null;
  salesProfitRate?: number | null;
}
