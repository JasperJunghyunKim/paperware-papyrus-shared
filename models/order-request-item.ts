import { Location } from '.';
import { OrderRequestItemStatus } from './enum';

export default interface OrderRequestItem {
  id: number;
  serial: string;
  item: string;
  quantity: string;
  memo: string;
  dstMemo: string;
  status: OrderRequestItemStatus;
}
