import {
  Packaging,
  PaperCert,
  PaperColor,
  PaperColorGroup,
  PaperPattern,
  Product,
  StockPrice,
} from '.';

export default interface ArrivalStock {
  packaging: Packaging;
  product: Product;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroup: PaperColorGroup | null;
  paperColor: PaperColor | null;
  paperPattern: PaperPattern | null;
  paperCert: PaperCert | null;
  stockPrice: StockPrice | null;
  tradePrice: StockPrice | null;
}
