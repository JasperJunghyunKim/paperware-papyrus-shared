import Company from './company';
import { CartType, PlanType } from './enum';
import Packaging from './packaging';
import PaperCert from './paper-cert';
import PaperColor from './paper-color';
import PaperColorGroup from './paper-color-group';
import PaperPattern from './paper-pattern';
import Product from './product';

interface Order {
  srcCompany: Company;
  dstCompany: Company;
}

interface OrderStock {
  order: Order;
}

interface OrderProcess {
  order: Order;
}

interface Plan {
  planNo: string;
  type: PlanType;
  orderStock: OrderStock | null;
  orderProcess: OrderProcess | null;
}

export default interface Cart {
  id: number;
  type: CartType;
  // 원지 정보
  company: Company;
  plan: Plan | null;
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
  memo: string;
  totalAvailableQuantity: number;
  totalQuantity: number;
}
