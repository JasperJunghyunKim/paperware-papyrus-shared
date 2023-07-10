import { StockPrice } from '../../models';
import { DiscountType, OfficialPriceType, PriceUnit } from '../../models/enum';
import { PaginationQuery } from '../../models/pagination';

/** 자사 재고그룹 목록 요청 */
export interface StockGroupListQuery extends PaginationQuery {
  planId?: 'any' | number;
  isDirectShippingIncluded?: 'true' | 'false';
  isZeroQuantityIncluded?: 'true' | 'false';
  initialPlanId?: number;

  /// 검색 필드 (다중검색은 | 로 구분)
  warehouseIds?: string;
  packagingIds?: string;
  paperTypeIds?: string;
  manufacturerIds?: string;
  minGrammage?: number;
  maxGrammage?: number;
  sizeX?: number;
  sizeY?: number;
}

/** 자사 재고그룹 히스토리 요청 */
export interface StockGroupHistoryQuery extends PaginationQuery {
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
}

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
  initialPlanId?: number;
  isZeroQuantityIncluded?: 'true' | 'false';
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

  /// 검색 필드 (다중검색은 | 로 구분)
  packagingIds?: string;
  paperTypeIds?: string;
  manufacturerIds?: string;
  minGrammage?: number;
  maxGrammage?: number;
  sizeX?: number;
  sizeY?: number;
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

/** 도착예정재고 금액 수정 */
export interface ArrivalStockPriceUpdateRequest {
  // 스펙 (재고그룹 특정)
  planId: number;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY?: number;
  paperColorGroupId?: number;
  paperColorId?: number;
  paperPatternId?: number;
  paperCertId?: number;

  // 변경내용
  stockPrice: StockPrice;
}

/** 도착예정재고 스펙 수정 */
export interface ArrivalStockSpecUpdateRequest {
  // 스펙 (재고그룹 특정)
  planId: number;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY?: number;
  paperColorGroupId?: number;
  paperColorId?: number;
  paperPatternId?: number;
  paperCertId?: number;

  // 변경내용
  spec: {
    productId: number;
    packagingId: number;
    grammage: number;
    sizeX: number;
    sizeY?: number;
    paperColorGroupId?: number;
    paperColorId?: number;
    paperPatternId?: number;
    paperCertId?: number;
  };
}

/** 도착예정재고 스펙 삭제 */
export interface ArrivalStockDeleteQuery {
  // 스펙 (재고그룹 특정)
  planId: number;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY?: number;
  paperColorGroupId?: number;
  paperColorId?: number;
  paperPatternId?: number;
  paperCertId?: number;
}
