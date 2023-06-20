import { Location, StockEvent } from ".";
import { OrderStatus, OrderType, PlanStatus, PlanType } from "./enum";

interface Order {
    id: number;
    orderNo: string;
    orderType: OrderType;
    status: OrderStatus;
    isEntrusted: boolean;
    memo: string;
}

export default interface OrderEtc {
    id: number;
    order: Order;
    item: string;
}