import { DepositEvent, OrderDeposit, OrderStock } from '.';
import Company from './company';
import { OrderStatus, OrderType } from './enum';

export default interface Order {
  id: number;
  orderNo: string;
  srcCompany: Company;
  dstCompany: Company;
  orderType: OrderType;
  status: OrderStatus;
  isEntrusted: boolean;
  memo: string;
  stockAcceptedCompanyId: number | null;
  isStockRejected: boolean;
  orderStock: OrderStock | null;
  orderDeposit: OrderDeposit | null;
  srcDepositEvent: DepositEvent | null;
  dstDepositEvent: DepositEvent | null;
}
