import { Company, DepositEvent, StockEvent } from '.';
import { Model } from '..';
import { OrderStatus, OrderType, PlanStatus, PlanType } from './enum';

interface Order {
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
  srcDepositEvent: DepositEvent | null;
  dstDepositEvent: DepositEvent | null;
}

export default interface Plan {
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
}
