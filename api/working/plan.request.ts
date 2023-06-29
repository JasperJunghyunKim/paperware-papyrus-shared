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

export interface RegisterInputStockRequest {
  stockId: number;
  quantity: number;
}

export type PlanInputListQuery = PaginationQuery;
