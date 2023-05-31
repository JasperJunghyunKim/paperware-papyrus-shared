import { Company, Order, StockEvent } from '.';
import { PlanType } from './enum';

export default interface Plan {
  id: number;
  planNo: string;
  type: PlanType;
  company: Company;
  createdAt: string;
  targetStockEvent: StockEvent[];
  orderStock: {
    order: Order;
  } | null;
}
