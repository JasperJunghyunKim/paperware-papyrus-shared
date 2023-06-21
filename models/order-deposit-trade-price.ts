import OrderDepositTradeAltBundle from "./order-deposit-trade-alt-bundle ";

export default interface OrderDepositTradePrice {
    orderId: number;
    companyId: number;
    officialPriceType: any;
    officialPrice: number;
    officialPriceUnit: any;
    discountType: any;
    discountPrice: number;
    unitPrice: number;
    unitPriceUnit: any;
    processPrice: number;
    orderDepositTradeAltBundle: OrderDepositTradeAltBundle | null;
}