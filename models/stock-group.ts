import Company from "./company";
import Packaging from "./packaging";
import PaperCert from "./paper-cert";
import PaperColor from "./paper-color";
import PaperColorGroup from "./paper-color-group";
import PaperPattern from "./paper-pattern";
import Plan from "./plan";
import Product from "./product";
import Warehouse from "./warehouse";

type WarehouseWithoutCompany = Omit<Warehouse, 'company'>
interface StockGroupPlan {
    id: number;
    planNo: string;
    orderStock: {
        order: {
            id: number;
            orderNo: string;
            wantedDate: string;
            partnerCompany: Company;
        }
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
}
