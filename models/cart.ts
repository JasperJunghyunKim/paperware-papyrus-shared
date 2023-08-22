import Company from './company';
import { CardCompany, CartType } from './enum';
import Packaging from './packaging';
import PaperCert from './paper-cert';
import PaperColor from './paper-color';
import PaperColorGroup from './paper-color-group';
import PaperPattern from './paper-pattern';
import Product from './product';

export default interface Cart {
  id: number;
  type: CartType;
  // 원지 정보
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
  memo: string;
  totalAvailableQuantity: number;
  totalQuantity: number;
}
