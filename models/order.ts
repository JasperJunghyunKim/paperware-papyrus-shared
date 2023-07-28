import {
  DepositEvent,
  Enum,
  OrderDeposit,
  OrderEtc,
  OrderProcess,
  OrderStock,
  Packaging,
  PaperCert,
  PaperColor,
  PaperColorGroup,
  PaperPattern,
  Plan,
  Product,
  StockEvent,
  TaxInvoice,
  TradePrice,
} from '.';
import { Model } from '..';
import Company from './company';
import {
  InvoiceStatus,
  OrderStatus,
  OrderType,
  PlanStatus,
  PlanType,
  TaskStatus,
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

export type OrderListItem = Order & {
  orderStock: {
    id: number;
    orderId: number;
    dstLocation: Location;
    wantedDate: string;
    isDirectShipping: boolean;
    plan: {
      id: number;
      planNo: string;
      type: Enum.PlanType;
      status: Enum.PlanStatus;
      assignStockEvent: Model.StockEvent;
      companyId: number;
      task: {
        status: TaskStatus;
      }[];
      invoice: {
        invoiceStatus: InvoiceStatus;
      }[];
    }[];
    // 정상거래의 주문 원지 정보
    company: Company;
    planId: number | null;
    warehouse: {
      id: number;
      name: string;
      isPublic: boolean;
      address: string;
    } | null;
    product: Product;
    packaging: Packaging;
    grammage: number;
    sizeX: number;
    sizeY: number;
    paperColorGroup: PaperColorGroup | null;
    paperColor: PaperColor | null;
    paperPattern: PaperPattern | null;
    paperCert: PaperCert | null;
    quantity: number;
  };
  orderProcess: {
    id: number;
    srcLocation: Location;
    dstLocation: Location;
    isSrcDirectShipping: boolean;
    isDstDirectShipping: boolean;
    srcWantedDate: string;
    dstWantedDate: string;
    order: Order;
    plan: {
      id: number;
      planNo: string;
      status: PlanStatus;
      type: PlanType;
      company: Company;
      createdAt: string;
      assignStockEvent: StockEvent | null;
      targetStockEvent: StockEvent[];
      orderStock: {
        dstLocation: Model.Location;
        wantedDate: string;
        order: Order;
      } | null;
      orderProcess: {
        dstLocation: Model.Location;
        dstWantedDate: string;
        srcLocation: Model.Location;
        srcWantedDate: string;
        order: Order;
      } | null;
      task: {
        status: TaskStatus;
      }[];
      invoice: {
        invoiceStatus: InvoiceStatus;
      }[];
    }[];
    // 외주공정의 주문 원지 정보
    company: Company;
    planId: number | null;
    warehouse: {
      id: number;
      name: string;
      isPublic: boolean;
      address: string;
    } | null;
    product: Product;
    packaging: Packaging;
    grammage: number;
    sizeX: number;
    sizeY: number;
    paperColorGroup: PaperColorGroup | null;
    paperColor: PaperColor | null;
    paperPattern: PaperPattern | null;
    paperCert: PaperCert | null;
    quantity: number;
  };
};
