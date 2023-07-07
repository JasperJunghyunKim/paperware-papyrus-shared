import { Location } from '.';
import Company from './company';
import { OrderType, PlanType } from './enum';
import Packaging from './packaging';
import PaperCert from './paper-cert';
import PaperColor from './paper-color';
import PaperColorGroup from './paper-color-group';
import PaperPattern from './paper-pattern';
import Plan from './plan';
import Product from './product';
import Warehouse from './warehouse';

type WarehouseWithoutCompany = Omit<Warehouse, 'company'>;
type LocationWithoutCompany = Omit<Location, 'company'>;

interface StockGroupOrder {
  id: number;
  orderNo: string;
  orderType: OrderType;
  partnerCompany: Company;
}

interface StockGroupPlan {
  id: number;
  planNo: string;
  planType: PlanType;
  orderStock: {
    wantedDate: string;
    dstLocation: LocationWithoutCompany;
    order: StockGroupOrder;
  } | null;
  orderProcess: {
    srcWantedDate: string;
    dstWantedDate: string;
    srcLocation: LocationWithoutCompany;
    dstLocation: LocationWithoutCompany;
    order: StockGroupOrder;
  } | null;
  planShipping: {
    wantedDate: string;
    dstLocation: LocationWithoutCompany;
  } | null;
}

export default interface StockGroup {
  warehouse: WarehouseWithoutCompany | null;
  product: Product;
  packaging: Packaging;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroup: PaperColorGroup | null;
  paperColor: PaperColor | null;
  paperPattern: PaperPattern | null;
  paperCert: PaperCert | null;
  plan: StockGroupPlan | null;
  totalQuantity: number;
  availableQuantity: number;
  totalArrivalQuantity: number;
  storingQuantity: number;
  nonStoringQuantity: number;
  lossRate: number | null;
}
