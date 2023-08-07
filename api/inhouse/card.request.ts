import { CardCompany } from '../../models/enum';
import Card from '../../models/card';
import { PaginationQuery } from '../../models/pagination';

export type CardListQuery = PaginationQuery;

/** 카드 등록 */
export type CardCreateRequest = {
  cardCompany: CardCompany;
  cardName: string;
  cardNumber: string;
  cardHolder: string;
};

/** 카드 수정 */
export type CardUpdateRequest = Pick<Card, 'cardName'>;
