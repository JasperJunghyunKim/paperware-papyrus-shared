import { Model } from '../..';
import { PaginationResponse } from '../../models/pagination';

export type SettingUserListReseponse = PaginationResponse<
  Omit<Model.User, 'company'>
>;

export type SettingUserResponse = Omit<Model.User, 'company'>;

export interface UserIdCheckResponse {
  isExists: boolean; // 아이디 존재시 true
}

export type UserMemuResponse = {
  menu: string | null;
};
