import Packaging from './packaging';
import PaperCert from './paper-cert';
import PaperColor from './paper-color';
import PaperColorGroup from './paper-color-group';
import PaperPattern from './paper-pattern';
import Product from './product';

export default interface Deposit {
  id: number;
  companyRegistrationNumber: string;
  partnerNickName: string;
  packaging: Packaging;
  product: Product;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroup: PaperColorGroup | null;
  paperColor: PaperColor | null;
  paperPattern: PaperPattern | null;
  paperCert: PaperCert | null;
  lossRate: number | null;
  quantity: number;
}
