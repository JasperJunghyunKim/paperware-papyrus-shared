import { CartType } from '../../models/enum';

/** 장바구니 품목 등록 */
export interface CartCreateRequest {
  type: CartType;
  companyId: number;
  warehouseId?: number | null;
  planId?: number | null;
  productId: number;
  packagingId: number;
  grammage: number;
  sizeX: number;
  sizeY?: number | null;
  paperColorGroupId?: number | null;
  paperColorId?: number | null;
  paperPatternId?: number | null;
  paperCertId?: number | null;
  quantity: number;
  memo?: string | null;
}
