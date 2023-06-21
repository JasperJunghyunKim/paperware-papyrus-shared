import { Enum, Location } from '.';
import { Model } from '..';

export default interface OrderStock {
  id: number;
  orderId: number;
  dstLocation: Location;
  wantedDate: string;
  isDirectShipping: boolean;
  plan: {
    id: number;
    planNo: string;
    type: Enum.PlanType;
    status: Enum.PlanStatus;
    assignStockEvent: Model.StockEvent;
    companyId: number;
  }[];
}
