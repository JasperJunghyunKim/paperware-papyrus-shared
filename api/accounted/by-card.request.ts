import { ByCard } from '../../models';

export type ByCardCreateRequest = Omit<
  ByCard,
  | 'companyId'
  | 'accountedType'
  | 'accountedId'
  | 'partnerNickName'
  | 'cardName'
  | 'cardNumber'
  | 'cardCompany'
  | 'accountName'
  | 'bankAccountNumber'
  | 'bankComapny'
  | 'accountedMethod'
  | 'totalAmount'
>;
export type ByCardUpdateRequest = Omit<
  ByCard,
  | 'companyId'
  | 'accountedId'
  | 'companyRegistrationNumber'
  | 'partnerNickName'
  | 'accountedId'
  | 'cardId'
  | 'cardName'
  | 'cardNumber'
  | 'cardCompany'
  | 'bankAccountId'
  | 'accountName'
  | 'bankAccountNumber'
  | 'bankComapny'
  | 'accountedType'
  | 'accountedMethod'
  | 'totalAmount'
>;
