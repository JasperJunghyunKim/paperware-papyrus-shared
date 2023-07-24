import { Accounted } from '../../models';
import { PaginationResponse } from '../../models/pagination';

export type AccountedListResponse = PaginationResponse<Accounted>;
export type AccountedItemResponse = Accounted;

export type AccountedUnpaidListResponse = PaginationResponse<{
  companyRegistrationNumber: string;
  partnerNickName: string;
  creditLimit: number;
  totalPrice: number;
  price1: number; // N+1월
  price2: number; // N월
  price3: number; // N-1월
  price4: number; // N-2월
  price5: number; // N-3월
  price6: number; // N-4월
  price7: number; // N-5월 이전
}> & {
  // footer
  totalPrice: {
    totalPrice: number;
    price1: number; // N+1월
    price2: number; // N월
    price3: number; // N-1월
    price4: number; // N-2월
    price5: number; // N-3월
    price6: number; // N-4월
    price7: number; // N-5월 이전
  };
};
