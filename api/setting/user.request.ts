import { PaginationQuery } from "../../models/pagination";

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

export interface UserUpdateRequest {
  password?: string; // 빈값 or undefined면 업데이트 하지 않음
  name: string;
  birthDate: string;
  email: string;
}

export interface UserActivatedUpdateRequest {
  isActivated: boolean;
}

export interface UserMenuUpdateRequest {
  menu: string;
}
