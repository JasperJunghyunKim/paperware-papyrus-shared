import { StockEventStatus } from '@prisma/client';
import { Model } from '../..';
import { Stock, StockEvent, StockGroup } from '../../models';
import { PaginationResponse } from '../../models/pagination';

/** 재고그룹 목록 조회 */
export type StockGroupListResponse = PaginationResponse<StockGroup>;

/** 재고그룹 히스토리 조회 */
export type StockGroupHistoryResponse = {
  stockInfo: Stock;
  stocks: Stock[];
  stockEvents: PaginationResponse<StockEvent & { remainingQuantity: number }>;
};

/** 자사 자식재고 목록 조회 */
export type StockListResponse = PaginationResponse<Stock>;

/** 자사 재고 상세 */
export type StockDetailResponse = Stock;

/** 거래처 재고그룹 목록 조회 */
export type PartnerStockGroupListResponse = PaginationResponse<StockGroup>;

export type StockGroupQuantityResponse = Model.StockQuantity;

/** 재고그룹 상세 조회 */
export type StockGroupDetailResponse = StockGroup;
