import { Model } from '../..';
import { PaginationResponse } from 'src/@shared/models/pagination';

export type SettingUserListReseponse = PaginationResponse<
  Omit<Model.User, 'company'>
>;
