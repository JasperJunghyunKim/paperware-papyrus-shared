import {
  Company,
  Enum,
  Location,
  Packaging,
  PaperCert,
  PaperColor,
  PaperColorGroup,
  PaperPattern,
  Product,
} from '.';
import { Model } from '..';

export default interface OrderReturn {
  id: number;
  orderId: number;
  originOrderNo: string | null;
  dstLocation: Location;
  wantedDate: string;
  plan: {
    id: number;
    planNo: string;
    type: Enum.PlanType;
    status: Enum.PlanStatus;
    assignStockEvent: Model.StockEvent;
    companyId: number;
  }[];
  // 반품 원지 정보
  product: Product;
  packaging: Packaging;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroup: PaperColorGroup | null;
  paperColor: PaperColor | null;
  paperPattern: PaperPattern | null;
  paperCert: PaperCert | null;
  quantity: number;
}
