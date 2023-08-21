import { CardCompany, CartType } from './enum';

export default interface Cart {
  id: number;
  type: CartType;
  // 원지 정보
  companyId: number;
  planId: number | null;
  warehouseId: number | null;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY: number;
  paperColorGroupId: number | null;
  paperColorId: number | null;
  paperPatternId: number | null;
  paperCertId: number | null;
  quantity: number;
  memo: string;
}
