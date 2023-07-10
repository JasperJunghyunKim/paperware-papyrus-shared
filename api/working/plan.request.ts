import { PaginationQuery } from '../../models/pagination';

export type PlanListQueryType = 'INHOUSE' | 'DEFAULT';

export interface PlanListQuery extends PaginationQuery {
  type?: PlanListQueryType;
}

export interface PlanCreateRequest {
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroupId: number;
  paperColorId: number;
  paperPatternId: number;
  paperCertId: number;
  warehouseId: number;
  memo: string;
  quantity: number;
}

/** 실투입재고 등록 */
export interface RegisterInputStockRequest {
  stockId: number;
  quantity?: number;
  useRemainder?: boolean;
}

/** 실투입재고 수량 변경 */
export interface UpdateInputStockRequest {
  stockId: number;
  quantity?: number;
  useRemainder?: boolean;
}

/** 실투입재고 취소 */
export interface DeleteInputStockRequest {
  stockId: number;
}

export type PlanInputListQuery = PaginationQuery;
