import Company from './company';
import {
  DiscountType,
  OfficialPriceType,
  PlanType,
  PriceUnit,
  StockEventStatus,
} from './enum';
import Stock from './stock';

interface Order {
  srcCompany: Company;
  dstCompany: Company;
}

interface OrderStock {
  order: Order;
}

interface OrderProcess {
  order: Order;
}

interface Plan {
  planNo: string;
  type: PlanType;
  orderStock: OrderStock | null;
  orderProcess: OrderProcess | null;
}

export default interface StockEvent {
  id: number;
  stock: Stock;
  change: number;
  status: StockEventStatus;
  createdAt: string;
  plan: Plan;
}
