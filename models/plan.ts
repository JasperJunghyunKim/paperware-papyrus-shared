import { Company, DepositEvent, StockEvent } from '.';
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
  stockAcceptedCompanyId: number | null;
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
    order: Order;
  } | null;
  orderProcess: {
    order: Order;
  } | null;
}
