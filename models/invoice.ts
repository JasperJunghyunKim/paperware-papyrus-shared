import {
  Company,
  Enum,
  Location,
  Order,
  Packaging,
  PaperCert,
  PaperColor,
  PaperColorGroup,
  PaperPattern,
  Product,
  Shipping,
  StockEvent,
} from '.';

export default interface Invoice {
  id: number;
  invoiceNo: string;
  invoiceStatus: Enum.InvoiceStatus;
  shipping: Shipping | null;
  product: Product;
  packaging: Packaging;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroup: PaperColorGroup;
  paperColor: PaperColor;
  paperPattern: PaperPattern;
  paperCert: PaperCert;
  quantity: number;
  plan: {
    id: number;
    planNo: string;
    status: Enum.PlanStatus;
    type: Enum.PlanType;
    company: Company;
    createdAt: string;
    assignStockEvent: StockEvent | null;
    targetStockEvent: StockEvent[];
    orderStock: {
      dstLocation: Location;
      wantedDate: string;
      order: Order;
    } | null;
    orderProcess: {
      dstLocation: Location;
      dstWantedDate: string;
      srcLocation: Location;
      srcWantedDate: string;
      order: Order;
    } | null;
  };
}
