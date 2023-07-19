import { Location } from '.';

export default interface OrderRequestItem {
  id: number;
  serial: string;
  item: string;
  quantity: string;
  memo: string;
  dstMemo: string;
  status: any;
}
