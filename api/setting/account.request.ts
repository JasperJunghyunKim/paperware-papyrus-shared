export interface AccountUpdateRequest {
  name: string;
  birthDate: string;
  email: string;
}

export interface AccountPasswordUpdateRequest {
  password: string;
}

export interface AccountPhoneNoUpdateRequest {
  phoneNo: string;
  authKey: string;
}

/** 최초로그인시에만 가능 */
export interface AccountPasswordAndPhoneNoUpdateRequest {
  password: string;
  phoneNo: string;
  authKey: string;
}
