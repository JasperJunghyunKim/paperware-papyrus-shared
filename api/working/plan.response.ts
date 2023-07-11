import { Plan, StockEvent } from '../../models';
import { PaginationResponse } from '../../models/pagination';

export type PlanListResponse = PaginationResponse<Plan>;
export type PlanItemResponse = Plan;
export type PlanInputListResponse = PaginationResponse<StockEvent>;

/** 실투입 재고 상세 */
export interface InputStockResponse {
  stockId: number;
  quantity: number;
  useRemainder: boolean;
}
