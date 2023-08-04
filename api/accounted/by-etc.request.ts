import { ByEtc } from '../../models';

export type ByEtcCreateRequest = Omit<
  ByEtc,
  | 'accountedId'
  | 'partnerNickName'
  | 'companyId'
  | 'accountedType'
  | 'accountedMethod'
>;
export type ByEtcUpdateRequest = Omit<
  ByEtc,
  | 'companyId'
  | 'accountedId'
  | 'companyRegistrationNumber'
  | 'partnerNickName'
  | 'accountedType'
  | 'accountedMethod'
>;
