import {
  DepositEvent,
  OrderDeposit,
  OrderEtc,
  OrderProcess,
  OrderStock,
  TradePrice,
} from '.';
import Company from './company';
import { OrderStatus, OrderType } from './enum';

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
  acceptedCompanyId: number | null;
  isStockRejected: boolean;
  orderStock: OrderStock | null;
  orderDeposit: OrderDeposit | null;
  orderProcess: OrderProcess | null;
  orderEtc: OrderEtc | null;
  depositEvent: DepositEvent | null;
  tradePrice: TradePrice[];
}
