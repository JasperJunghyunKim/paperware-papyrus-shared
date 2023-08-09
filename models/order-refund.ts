import { OrderStatus, OrderType } from './enum';

interface Order {
  id: number;
  orderNo: string;
  orderType: OrderType;
  status: OrderStatus;
  isEntrusted: boolean;
  memo: string;
}

export default interface OrderRefund {
  id: number;
  order: Order;
  originOrderNo: string | null;
  item: string;
}
