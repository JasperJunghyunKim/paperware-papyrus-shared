/** 내부공정 등록 */
export type InhouseProcessCreateRequest = {
  warehouseId: number | null;
  planId: number | null;
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
};
