import { Enum, Plan, StockPrice } from '.';
import Company from './company';
import { PlanType } from './enum';
import Packaging from './packaging';
import PaperCert from './paper-cert';
import PaperColor from './paper-color';
import PaperColorGroup from './paper-color-group';
import PaperPattern from './paper-pattern';
import Product from './product';
import Warehouse from './warehouse';

export default interface Stock {
  id: number;
  serial: string;
  company: Company;
  warehouse: Warehouse | null;
  planId: number;
  product: Product;
  packaging: Packaging;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroup: PaperColorGroup | null;
  paperColor: PaperColor | null;
  paperPattern: PaperPattern | null;
  paperCert: PaperCert | null;
  cachedQuantity: number;
  cachedQuantityAvailable: number;
  isSyncPrice: boolean;
  stockPrice: StockPrice;
  initialPlan: {
    type: PlanType;
  };
}
