import { Enum, Plan, StockPrice } from '.';
import Company from './company';
import { DiscountType, OfficialPriceType, PlanType, PriceUnit } from './enum';
import Packaging from './packaging';
import PaperCert from './paper-cert';
import PaperColor from './paper-color';
import PaperColorGroup from './paper-color-group';
import PaperPattern from './paper-pattern';
import Product from './product';
import Warehouse from './warehouse';

interface TradePrice {
  suppliedPrice: number;
  vatPrice: number;
  isBookClosed: boolean;
  orderStockTradePrice: {
    officialPriceType: OfficialPriceType;
    officialPrice: number;
    officialPriceUnit: PriceUnit;
    discountType: DiscountType;
    discountPrice: number;
    unitPrice: number;
    unitPriceUnit: PriceUnit;
    processPrice: number;
  } | null;
}

interface Order {
  srcCompany: Company;
  dstCompany: Company;
  tradePrice: TradePrice[];
  depositEventId: number;
}

interface OrderStock {
  order: Order;
}

interface OrderProcess {
  order: Order;
}

interface InitialPlan {
  planNo: string;
  type: PlanType;
  orderStock: OrderStock | null;
  orderProcess: OrderProcess | null;
}

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
  stockPrice: StockPrice | null;
  initialPlan: InitialPlan;
}
