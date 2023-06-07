import { OrderStatus, OrderType } from "./enum";
import Packaging from "./packaging";
import PaperCert from "./paper-cert";
import PaperColor from "./paper-color";
import PaperColorGroup from "./paper-color-group";
import PaperPattern from "./paper-pattern";
import Product from "./product";

interface Order {
    id: number;
    orderNo: string;
    orderType: OrderType;
    status: OrderStatus;
    isEntrusted: boolean;
    memo: string;
}

export default interface OrderDeposit {
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
    quantity: number;
    order: Order;
}
