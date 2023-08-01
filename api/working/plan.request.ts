import { TaskStatus } from 'src/@shared/models/enum';
import { PaginationQuery } from '../../models/pagination';

export type PlanListQueryType = 'INHOUSE' | 'DEFAULT';

export interface PlanListQuery extends PaginationQuery {
  type?: PlanListQueryType;
  /// 검색
  // 1. 작업번호
  planNo?: string;
  /** PREPARING, PROGRESSING, PROGRESSED */
  // 2. 컨버팅 상태
  convertingStatus?: string;
  // 3. 길로틴 상태
  guillotineStatus?: string;
  // 4. 출고 상태
  releaseStatus?: string;
  // 5. 납품처
  partnerCompanyRegistrationNumbers?: string;
  // 6. 납품 요청일
  minWantedDate?: string;
  maxWantedDate?: string;
  // 7. 수급 여부
  arrived?: 'true' | 'false';
  // 8. 창고
  warehouseIds?: string;
  // 9-1. 포장
  packagingIds?: string;
  // 9-2. 지종
  paperTypeIds?: string;
  // 9-3. 제지사
  manufacturerIds?: string;
  // 9-4. 평량
  minGrammage?: number;
  maxGrammage?: number;
  // 9-5. 지폭
  sizeX?: number;
  // 9-6. 지장
  sizeY?: number;
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
