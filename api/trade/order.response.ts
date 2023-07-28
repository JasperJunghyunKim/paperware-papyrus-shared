import { PaginationResponse } from '../../models/pagination';
import {
  Deposit,
  DepositEvent,
  Order,
  OrderDeposit,
  OrderEtc,
  OrderProcess,
  Packaging,
  PaperCert,
  PaperColor,
  PaperColorGroup,
  PaperPattern,
  Product,
  StockGroup,
  TradePrice,
} from '../../models';
import { OrderStatus, OrderType } from '../../models/enum';
import { OrderListItem } from 'src/@shared/models/order';

export type OrderListResponse = PaginationResponse<OrderListItem>;
export type OrderItemResponse = Order;

export type OrderStockArrivalListResponse = PaginationResponse<StockGroup>;

export type OrderCreateResponse = Order;

/** 거래금액 조회 */
export type TradePriceResponse = TradePrice;

/** 보관량 조회 */
export type DepositListResponse = PaginationResponse<Deposit>;

/** 보관량 히스토리 조회 */
export type DepositHistoryResponse = {
  id: number;
  change: number;
  targetOrder: {
    id: number;
    orderType: OrderType;
    orderNo: string;
    orderDate: string;
    srcCompanyId: number;
    dstCompanyId: number;
    status: OrderStatus;
  } | null;
  user: {
    name: string;
    company: {
      companyRegistrationNumber: string;
    };
  };
  createdAt: string;
  memo: string;
  deposit: {
    id: number;
    packaging: Packaging;
    product: Product;
    grammage: number;
    sizeX: number;
    sizeY: number;
    paperColorGroup: PaperColorGroup | null;
    paperColor: PaperColor | null;
    paperPattern: PaperPattern | null;
    paperCert: PaperCert | null;
  };
  orderDeposit: OrderDeposit | null;
}[];

/** 주문 보관 상세 */
export type OrderDepositResponse = {
  depositEvent: DepositEvent | null;
};

/** 외주공정 상세 */
export type OrderProcessResponse = OrderProcess;

/** 기타거래 상세 */
export type OrderEtcResponse = OrderEtc;
