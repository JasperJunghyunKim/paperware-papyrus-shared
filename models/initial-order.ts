import { Location } from '.';
import Company from './company';
import { OrderStatus } from './enum';

export default interface InitialOrder {
  id: number;
  orderNo: string;
  srcCompany: Company;
  dstCompany: Company;
  status: OrderStatus;
  isEntrusted: boolean;
  memo: string;
  wantedDate: string;
  acceptedCompanyId: number | null;
  isStockRejected: boolean;
  orderStock: {
    dstLocation: Location;
  };
}
