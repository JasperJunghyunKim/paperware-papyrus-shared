import {
  DepositType,
  DiscountType,
  OfficialPriceType,
  PriceUnit,
} from '../../models/enum';
import { Api } from '../..';
import { PaginationQuery } from '../../models/pagination';

export interface OrderListQuery extends PaginationQuery {
  /** 판매처 */
  srcCompanyId: number;
  /** 구매처 */
  dstCompanyId: number;
}

export interface OrderStockCreateRequest {
  srcCompanyId: number;
  dstCompanyId: number;
  locationId: number;
  memo: string;
  wantedDate: string;
  warehouseId: number | null;
  planId: number | null;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroupId: number | null;
  paperColorId: number | null;
  paperPatternId: number | null;
  paperCertId: number | null;
  quantity: number;
}

export interface OrderStockUpdateRequest {
  locationId: number;
  memo: string;
  wantedDate: string;
}

export interface OrderStockArrivalListQuery extends PaginationQuery { }

export interface OrderStockArrivalCreateRequest {
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroupId?: number | null;
  paperColorId?: number | null;
  paperPatternId?: number | null;
  paperCertId?: number | null;
  quantity: number;
  isSyncPrice: boolean;
  stockPrice: Api.StockCreateStockPriceRequest;
}

/** 거래금액 수정 */
export interface OrderStockTradeAltBundleUpdateRequest {
  altSizeX: number;
  altSizeY: number;
  altQuantity: number;
}

export interface OrderStockTradePriceUpdateRequest {
  officialPriceType: OfficialPriceType;
  officialPrice: number;
  officialPriceUnit: PriceUnit;
  discountType: DiscountType;
  discountPrice: number;
  unitPrice: number;
  unitPriceUnit: PriceUnit;
  processPrice: number;
  orderStockTradeAltBundle?: OrderStockTradeAltBundleUpdateRequest;
}

export interface OrderDepositTradeAltBundleUpdateRequest {
  altSizeX: number;
  altSizeY: number;
  altQuantity: number;
}

export interface OrderDepositTradePriceUpdateRequest {
  officialPriceType: OfficialPriceType;
  officialPrice: number;
  officialPriceUnit: PriceUnit;
  discountType: DiscountType;
  discountPrice: number;
  unitPrice: number;
  unitPriceUnit: PriceUnit;
  processPrice: number;
  orderStockTradeAltBundle?: OrderStockTradeAltBundleUpdateRequest;
}

export interface TradePriceUpdateRequest {
  suppliedPrice: number;
  vatPrice: number;
  orderStockTradePrice?: OrderStockTradePriceUpdateRequest;
  orderDepositTradePrice?: OrderStockTradePriceUpdateRequest;
}

/** 보관 등록 */
export interface OrderDepositCreateRequest {
  srcCompanyId: number;
  dstCompanyId: number;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroupId?: number | null;
  paperColorId?: number | null;
  paperPatternId?: number | null;
  paperCertId?: number | null;
  quantity: number;
  memo?: string;
}

/** 보관량 목록  */
export interface OrderDepositListQuery extends PaginationQuery {
  type: DepositType;
  companyRegistrationNumber?: string;
}

/** 보관량 증감 */
export interface DepositCreateRequest {
  type: DepositType;
  partnerCompanyRegistrationNumber: string;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroupId?: number | null;
  paperColorId?: number | null;
  paperPatternId?: number | null;
  paperCertId?: number | null;
  quantity: number;
  memo: string;
}

/** 원지 */
export interface OrderStockAssignStockRequest {
  warehouseId: number | null;
  planId: number | null;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroupId?: number | null;
  paperColorId?: number | null;
  paperPatternId?: number | null;
  paperCertId?: number | null;
  quantity: number;
}

/** 주문 원지 수정 */
export interface OrderStockAssignStockUpdateRequest
  extends OrderStockAssignStockRequest { }

/** 보관매입/매출 등록 */
export interface OrderDepositAssignDepositCreateRequest {
  depositId: number;
  quantity: number;
}

/** 주문매입/매출 수정 */
export interface OrderDepositAssignDepositUpdateRequest {
  depositId: number;
  quantity: number;
}

/** 외주공정 */
export interface OrderCuttingCreateRequest {
  srcCompanyId: number;
  dstCompanyId: number;
  srcLocationId: number;
  dstLocationId: number;
  memo: string;
  srcWantedDate: string;
  dstWantedDate: string;
  // 부모재고 선택
  warehouseId: number | null;
  planId: number | null;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroupId: number | null;
  paperColorId: number | null;
  paperPatternId: number | null;
  paperCertId: number | null;
  quantity: number;
}

/** 기타거래 */
export interface OrderEtcCreateRequest {
  srcCompanyId: number;
  dstCompanyId: number;
  item: string;
  memo: string;
}