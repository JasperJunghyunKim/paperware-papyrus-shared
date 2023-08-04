import { Security, BySecurity } from '../../models';

export type BySecurityCreateRequest = Omit<
  BySecurity,
  | 'accountedId'
  | 'partnerNickName'
  | 'companyId'
  | 'accountedType'
  | 'accountedMethod'
  | 'security'
  | 'bySecurityId'
> & {
  securityId: number;
  security?: Omit<Security, 'securityId' | 'securityStatus' | 'drawedStatus'>;
};

export type BySecurityUpdateRequest = Omit<
  BySecurity,
  | 'companyId'
  | 'accountedId'
  | 'companyRegistrationNumber'
  | 'partnerNickName'
  | 'security'
>;
