export interface OrderRequestCreateRequest {
  dstCompanyId: number;
  locationId?: number;
  wantedDate?: string;
  memo?: string;
  orderRequestItems: {
    item: string;
    quantity?: string;
    memo?: string;
  }[];
}
