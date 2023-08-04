import { ByCash } from '../../models';

export type ByCashCreateRequest = Omit<
  ByCash,
  | 'accountedId'
  | 'partnerNickName'
  | 'companyId'
  | 'accountedType'
  | 'accountedMethod'
>;
export type ByCashUpdateRequest = Omit<
  ByCash,
  | 'companyId'
  | 'accountedId'
  | 'companyRegistrationNumber'
  | 'partnerNickName'
  | 'accountedType'
  | 'accountedMethod'
>;
