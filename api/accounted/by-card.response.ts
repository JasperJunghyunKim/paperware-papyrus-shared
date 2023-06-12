import { ByCard } from '../../models';

export type ByCardQuery = ByCard;
export type ByCardItemResponse = Omit<ByCard, 'bankAccountId' | 'accountName'>;
