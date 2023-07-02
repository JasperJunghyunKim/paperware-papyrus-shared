import {
  Company,
  Location,
  Packaging,
  PaperCert,
  PaperColor,
  PaperColorGroup,
  PaperPattern,
  Product,
  StockEvent,
} from '.';
import { OrderStatus, OrderType, PlanStatus, PlanType } from './enum';

interface Order {
  id: number;
  orderNo: string;
  orderType: OrderType;
  status: OrderStatus;
  isEntrusted: boolean;
  memo: string;
}

interface Plan {
  id: number;
  planNo: string;
  type: PlanType;
  status: PlanStatus;
  assignStockEvent: StockEvent;
  targetStockEvent: StockEvent[];
  companyId: number;
}

export default interface OrderProcess {
  id: number;
  srcLocation: Location;
  dstLocation: Location;
  isSrcDirectShipping: boolean;
  isDstDirectShipping: boolean;
  srcWantedDate: string;
  dstWantedDate: string;
  order: Order;
  plan: Plan[];
  // 외주공정의 주문 원지 정보
  company: Company;
  planId: number | null;
  warehouse: {
    id: number;
    name: string;
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
