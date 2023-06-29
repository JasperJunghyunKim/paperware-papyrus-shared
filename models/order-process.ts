import { Location, StockEvent } from '.';
import { OrderStatus, OrderType, PlanStatus, PlanType } from './enum';

interface Order {
  id: number;
  orderNo: string;
  orderType: OrderType;
  status: OrderStatus;
  isEntrusted: boolean;
  memo: string;
}

interface Plan {
  id: number;
  planNo: string;
  type: PlanType;
  status: PlanStatus;
  assignStockEvent: StockEvent;
  targetStockEvent: StockEvent[];
  companyId: number;
}

export default interface OrderProcess {
  id: number;
  srcLocation: Location;
  dstLocation: Location;
  isSrcDirectShipping: boolean;
  isDstDirectShipping: boolean;
  srcWantedDate: string;
  dstWantedDate: string;
  order: Order;
  plan: Plan[];
}
