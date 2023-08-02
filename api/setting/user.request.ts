import { PaginationQuery } from 'src/@shared/models/pagination';

export type SettingUserListQuery = PaginationQuery;

export interface UserIdCheckQuery {
  username: string;
}

export interface UserCreateRequest {
  username: string;
  password: string;
  name: string;
  birthDate: string;
  email: string;
}
