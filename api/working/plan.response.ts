import { Model } from '../..';
import { Company, Enum, Order, Plan, Stock, StockEvent } from '../../models';
import { PaginationResponse } from '../../models/pagination';

export type PlanListResponse = PaginationResponse<PlanListItem>;
export type PlanItemResponse = Plan;
export type PlanInputListResponse = PaginationResponse<StockEvent>;

/** 실투입 재고 상세 */
export interface InputStockResponse {
  stockId: number;
  quantity: number;
  useRemainder: boolean;
  stock: Stock;
}

export interface PlanListItem {
  id: number;
  planNo: string;
  status: Enum.PlanStatus;
  type: Enum.PlanType;
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
  task: {
    status: Enum.TaskStatus;
    type: Enum.TaskType;
  }[];
}
