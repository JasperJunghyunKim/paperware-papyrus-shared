import { Enum, Location } from '.';
import { Model } from '..';

export default interface OrderStock {
  id: number;
  orderId: number;
  dstLocation: Location;
  plan: {
    id: number;
    planNo: string;
    type: Enum.PlanType;
    assignStockEvent: Model.StockEvent;
    companyId: number;
  }[];
}
