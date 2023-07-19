import { PaginationQuery } from '../../models/pagination';

/** 퀵주문 목록 */
export interface OrderRequestListQuery extends PaginationQuery {
  srcCompanyId: number;
  dstCompanyId: number;
}

/** 퀵주문 생성 */
export interface OrderRequestCreateRequest {
  dstCompanyId: number;
  locationId?: number;
  wantedDate?: string;
  memo?: string;
  orderRequestItems: {
    item: string;
    quantity?: string;
    memo?: string;
  }[];
}
