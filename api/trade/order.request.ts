import { DiscountType, OfficialPriceType, PriceUnit } from '../../models/enum';
import { Api } from '../..';
import { PaginationQuery } from '../../models/pagination';

export interface OrderListQuery extends PaginationQuery {
  /** 판매처 */
  srcCompanyId: number;
  /** 구매처 */
  dstCompanyId: number;

  /** 구매자 사업자등록번호 */
  srcCompanyRegistrationNumber?: string;
  /** 마감여부 */
  bookClosed?: 'true' | 'false';
  /** year 특정 */
  year?: string;
  /** month 특정 */
  month?: string;

  /// 검색 필드
  /**
   * - orderType -
   * 'NORMAL' |
   * 'DEPOSIT' |
   * 'NORMAL_DEPOSIT' |
   * 'PROCESS' |
   * 'ETC'
   */
  orderTypes?: string;
  partnerCompanyRegistionNumbers?: string;
  orderNo?: string;
  minOrderDate?: string;
  maxOrderDate?: string;
  minWantedDate?: string;
  maxWantedDate?: string;
  /**
   * - orderStatus -
   * 'ORDER_PREPARING' |
   * 'ORDER_REQUESTED' |
   * 'ORDER_REJECTED' |
   * 'OFFER_PREPARING' |
   * 'OFFER_REQUESTED' |
   * 'OFFER_REJECTED' |
   * 'ACCEPTED' |
   * 'CANCELLED'
   */
  orderStatus?: string;
  /**
   * - taskStatus -
   * PREPARING |
   * PROGRESSING |
   * PROGRESSED
   */
  taskStatus?: string;
  /**
   * - releaseStatus -
   * PREPARING |
   * PROGRESSED
   */
  releaseStatus?: string;
  /**
   * - invoiceStatus -
   * WAIT_SHIPPING |
   * ON_SHIPPING |
   * DONE_SHIPPING
   */
  invoiceStatus?: string;
  packagingIds?: string;
  paperTypeIds?: string;
  manufacturerIds?: string;
  minGrammage?: number;
  maxGrammage?: number;
  sizeX?: number;
  sizeY?: number;
  /**
   * - bookCloseMethod -
   * TAX_INVOICE
   */
  bookCloseMethods?: string;
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
  orderDate: string;
  isDirectShipping?: boolean;
}

export interface OrderStockUpdateRequest {
  locationId: number;
  memo: string;
  wantedDate: string;
  orderDate: string;
  isDirectShipping?: boolean;
}

export type OrderStockArrivalListQuery = PaginationQuery;

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
  stockPrice?: Api.StockCreateStockPriceRequest;
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
  isSyncPrice?: boolean;
  orderStockTradePrice?: OrderStockTradePriceUpdateRequest;
  orderDepositTradePrice?: OrderStockTradePriceUpdateRequest;
}

/** 보관 등록 */
export interface OrderDepositCreateRequest {
  srcCompanyId: number;
  dstCompanyId: number;
  orderDate: string;
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

/** 보관 등록 공통정보 수정 */
export interface OrderDepositUpdateRequest {
  orderDate: string;
  memo?: string;
}

/** 보관 원지 수정 */
export interface OrderDepositUpdateAssignRequest {
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY?: number | null;
  paperColorGroupId?: number | null;
  paperColorId?: number | null;
  paperPatternId?: number | null;
  paperCertId?: number | null;
  quantity: number;
}

/** 보관량 목록  */
export interface OrderDepositListQuery extends PaginationQuery {
  srcCompanyRegistrationNumber?: string;
  dstCompanyRegistrationNumber?: string;

  /// 검색 필드 (다중검색은 | 로 구분)
  packagingIds?: string;
  paperTypeIds?: string;
  manufacturerIds?: string;
  minGrammage?: number;
  maxGrammage?: number;
  sizeX?: number;
  sizeY?: number;
}

/** 보관량 증감 */
export interface DepositCreateRequest {
  srcCompanyRegistrationNumber?: string;
  dstCompanyRegistrationNumber?: string;
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
export type OrderStockAssignStockUpdateRequest = OrderStockAssignStockRequest;

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

/** 외주공정 등록 */
export interface OrderProcessCreateRequest {
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
  orderDate: string;
  isSrcDirectShipping?: boolean;
  isDstDirectShipping?: boolean;
}

/** 외주공정 정보 업데이트 */
export interface OrderProcessInfoUpdateRequest {
  srcLocationId: number;
  dstLocationId: number;
  memo: string;
  srcWantedDate: string;
  dstWantedDate: string;
  orderDate: string;
  isSrcDirectShipping?: boolean;
  isDstDirectShipping?: boolean;
}

/** 외주공정 재고 수정 */
export interface OrderProcessStockUpdateRequest {
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
  orderDate: string;
  item: string;
  memo: string;
}

/** 기타거래 수정 */
export interface OrderEtcUpdateRequest {
  orderDate: string;
  item: string;
  memo: string;
}

/** 환불 등록 */
export interface OrderRefundCreateRequest {
  srcCompanyId: number;
  dstCompanyId: number;
  originOrderNo?: string;
  orderDate: string;
  item?: string;
  memo?: string;
}

/** 반품 등록 */
export interface OrderReturnCreateRequest {
  srcCompanyId: number;
  dstCompanyId: number;
  originOrderNo?: string | null;
  orderDate: string;
  wantedDate: string;
  locationId: number;
  memo?: string;
  // 원지 스펙
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
