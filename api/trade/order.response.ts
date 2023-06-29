import { PaginationResponse } from '../../models/pagination';
import {
  Deposit,
  DepositEvent,
  Order,
  OrderEtc,
  OrderProcess,
  StockGroup,
  TradePrice,
} from '../../models';

export type OrderListResponse = PaginationResponse<Order>;
export type OrderItemResponse = Order;

export type OrderStockArrivalListResponse = PaginationResponse<StockGroup>;

export type OrderCreateResponse = Order;

/** 거래금액 조회 */
export type TradePriceResponse = TradePrice;

/** 보관량 조회 */
export type DepositListResponse = PaginationResponse<Deposit>;

/** 보관량 히스토리 조회 */
export type DepositHistoryResponse = DepositEvent[];

/** 주문 보관 상세 */
export type OrderDepositResponse = {
  depositEvent: DepositEvent | null;
};

/** 외주공정 상세 */
export type OrderProcessResponse = OrderProcess;

/** 기타거래 상세 */
export type OrderEtcResponse = OrderEtc;
