import { Model } from '../..';
import { PaginationResponse } from '../../models/pagination';

export type ShippingListResponse = PaginationResponse<Model.ShippingItem>;

export type ShippingResponse = Model.ShippingItem;

export type ShippingCreateResponse = {
  id: number;
};

export type ShippingUpdateResponse = {
  id: number;
};
