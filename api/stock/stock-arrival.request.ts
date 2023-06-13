import { DiscountType, OfficialPriceType, PriceUnit } from "../../models/enum";
import { PaginationQuery } from "../../models/pagination";

export type StockArrivalListQuery = PaginationQuery;

/** 도착예정재고 입고 */
export interface StockArrivalApplyRequest {
  // 입고할 창고
  warehouseId: number;
  // 도착예정재고 스펙 선택
  planId: number;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroupId: number | null;
  paperColorId: number | null;
  paperPatternId: number | null;
  paperCertId: number | null;
}

/** 도착예정재고 금액 수정 */
export interface StockArrivalPriceUpdateRequest {
  // 도착예정재고 스펙 선택
  planId: number;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroupId: number | null;
  paperColorId: number | null;
  paperPatternId: number | null;
  paperCertId: number | null;
  isSyncPrice: boolean;
  stockPrice?: {
    officialPriceType: OfficialPriceType;
    officialPrice: number;
    officialPriceUnit: PriceUnit;
    discountType: DiscountType;
    unitPrice: number;
    discountPrice: number;
    unitPriceUnit: PriceUnit;
  } | null;
}
