import { Company, Order, StockEvent } from '.';
import { PlanStatus, PlanType } from './enum';

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
}
