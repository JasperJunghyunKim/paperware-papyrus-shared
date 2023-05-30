import { Company, Order, StockGroupEvent } from '.';
import { PlanType } from './enum';

export default interface Plan {
  id: number;
  planNo: string;
  type: PlanType;
  company: Company;
  createdAt: string;
  targetStockGroupEvent: StockGroupEvent[];
  orderStock: {
    order: Order;
  } | null;
}
