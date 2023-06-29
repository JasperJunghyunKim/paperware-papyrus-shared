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
  Warehouse,
} from '.';
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
  // 정상거래의 주문 원지 정보
  company: Company;
  planId: number | null;
  warehouse: {
    id: number;
    name: string;
    code: string;
    isPublic: boolean;
    address: string;
  } | null;
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
