import { ByOffset } from '../../models';

export type ByOffsetCreateRequest = Omit<
  ByOffset,
  | 'accountedId'
  | 'partnerNickName'
  | 'companyId'
  | 'accountedType'
  | 'accountedMethod'
>;
export type ByOffsetUpdateRequest = Omit<
  ByOffset,
  | 'companyId'
  | 'accountedId'
  | 'companyRegistrationNumber'
  | 'partnerNickName'
  | 'accountedType'
  | 'accountedMethod'
>;
