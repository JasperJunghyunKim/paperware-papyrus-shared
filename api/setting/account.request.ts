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
