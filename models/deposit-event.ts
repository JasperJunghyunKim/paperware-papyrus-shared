import OrderDeposit from "./order-deposit";

export default interface DepositEvent {
  id: number;
  change: number;
  createdAt: string;
  memo: string;
  orderDeposit: OrderDeposit | null;
}
