import { ByBankAccount } from '../../models';

export type ByBankAccountCreateRequest = Omit<
  ByBankAccount,
  | 'companyId'
  | 'partnerNickName'
  | 'accountedId'
  | 'accountName'
  | 'accountNumber'
  | 'bankComapny'
  | 'accountedType'
  | 'accountedMethod'
>;
export type ByBankAccountUpdateRequest = Omit<
  ByBankAccount,
  | 'companyId'
  | 'companyRegistrationNumber'
  | 'partnerNickName'
  | 'accountedId'
  | 'bankAccountId'
  | 'accountName'
  | 'accountNumber'
  | 'bankComapny'
  | 'accountedType'
  | 'accountedMethod'
>;
