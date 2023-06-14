import { ArrivalStock, StockEvent } from '../../models';
import { PaginationResponse } from '../../models/pagination';

export type StockArrivalResponse = PaginationResponse<StockEvent>;

export type StockArrivalDetail = ArrivalStock;
