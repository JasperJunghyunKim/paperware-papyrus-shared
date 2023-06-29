import {
  DepositEvent,
  OrderDeposit,
  OrderEtc,
  OrderProcess,
  OrderStock,
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
  stockAcceptedCompanyId: number | null;
  isStockRejected: boolean;
  orderStock: OrderStock | null;
  orderDeposit: OrderDeposit | null;
  orderProcess: OrderProcess | null;
  orderEtc: OrderEtc | null;
  srcDepositEvent: DepositEvent | null;
  dstDepositEvent: DepositEvent | null;
}
