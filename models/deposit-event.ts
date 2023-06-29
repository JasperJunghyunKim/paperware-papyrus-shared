import Deposit from './deposit';
import OrderDeposit from './order-deposit';
import Packaging from './packaging';
import PaperCert from './paper-cert';
import PaperColor from './paper-color';
import PaperColorGroup from './paper-color-group';
import PaperPattern from './paper-pattern';
import Product from './product';

export default interface DepositEvent {
  id: number;
  change: number;
  createdAt: string;
  memo: string;
  deposit: {
    id: number;
    packaging: Packaging;
    product: Product;
    grammage: number;
    sizeX: number;
    sizeY: number;
    paperColorGroup: PaperColorGroup | null;
    paperColor: PaperColor | null;
    paperPattern: PaperPattern | null;
    paperCert: PaperCert | null;
  };
  // orderDeposit: OrderDeposit | null;
}
