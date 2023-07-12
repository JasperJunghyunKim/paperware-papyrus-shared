import { PaginationResponse } from '../../models/pagination';
import { Partner } from '../../models';
import PartnerTaxManager from '../../models/partner-tax-manager';

export type PartnerResponse = Partner;

export type PartnerTaxManagerListResponse =
  PaginationResponse<PartnerTaxManager>;

export type PartnerTaxManagerItemResponse = PartnerTaxManager;
