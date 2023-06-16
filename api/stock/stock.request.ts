import { DiscountType, OfficialPriceType, PriceUnit } from '../../models/enum';
import { PaginationQuery } from '../../models/pagination';

/** 자사 재고그룹 목록 요청 */
export interface StockGroupListQuery extends PaginationQuery {
  planId?: 'any' | number;
};

/** 자사 재고목록 요청 */
export interface StockListQuery {
  warehouseId?: number;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY?: number;
  paperColorGroupId?: number;
  paperColorId?: number;
  paperPatternId?: number;
  paperCertId?: number;
  planId?: number;
}

/** 재고 생성 (신규 등록) */
export interface StockCreateStockPriceRequest {
  officialPriceType: OfficialPriceType;
  officialPrice: number;
  officialPriceUnit: PriceUnit;
  discountType: DiscountType;
  unitPrice: number;
  discountPrice: number;
  unitPriceUnit: PriceUnit;
}

export interface StockCreateRequest {
  warehouseId: number | null;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY?: number;
  paperColorGroupId?: number | null;
  paperColorId?: number | null;
  paperPatternId?: number | null;
  paperCertId?: number | null;
  quantity: number;
  stockPrice: StockCreateStockPriceRequest;
}

export interface ArrivalStockCreateRequest {
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY?: number;
  paperColorGroupId?: number | null;
  paperColorId?: number | null;
  paperPatternId?: number | null;
  paperCertId?: number | null;
  quantity: number;
  stockPrice: StockCreateStockPriceRequest;
  dstLocationId: number;
  wantedDate: string;
}

/** 거래처 재고그룹 목록 조회 */
export type PartnerStockGroupListQuery = PaginationQuery & {
  companyId?: number;
};

/** (deprecated) 재고 그룹 수량 조회 */
export interface StockGroupQuantityQuery {
  warehouseId: number | null;
  planId: number | null;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY?: number;
  paperColorGroupId?: number | null;
  paperColorId?: number | null;
  paperPatternId?: number | null;
  paperCertId?: number | null;
}

/** 재고 그룹 상세 조회 */
export interface StockGroupDetailQuery {
  warehouseId: number | null;
  planId: number | null;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY?: number;
  paperColorGroupId?: number | null;
  paperColorId?: number | null;
  paperPatternId?: number | null;
  paperCertId?: number | null;
}

/** 재고 증감 */
export interface StockQuantityChangeRequest {
  quantity: number;
}