import { ByCard } from '../../models';

export type ByCardCreateRequest = Omit<ByCard, 'bankAccountId' | 'accountedId' | 'partnerNickName' | 'cardName' | 'cardNumber' | 'cardCompany' | 'accountName'>;
export type ByCardUpdateRequest = Omit<ByCard, 'companyId' | 'accountedId' | 'companyRegistrationNumber' | 'partnerNickName' | 'accountedId' | 'cardId' | 'cardName' | 'cardNumber' | 'cardCompany' | 'bankAccountId' | 'accountName'>;
