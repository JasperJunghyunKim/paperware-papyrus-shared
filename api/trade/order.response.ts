import { PaginationResponse } from '../../models/pagination';
import { Deposit, Order, StockGroup, TradePrice } from '../../models';

export type OrderListResponse = PaginationResponse<Order>;
export type OrderItemResponse = Order;

export type OrderStockArrivalListResponse = PaginationResponse<StockGroup>;

export type OrderCreateResponse = Order;

/** 거래금액 조회 */
export type TradePriceResponse = TradePrice;

/** 보관량 조회 */
export type DepositListResponse = PaginationResponse<Deposit>;