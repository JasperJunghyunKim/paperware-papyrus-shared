export interface SendSmsAuthenticationRequest {
  phoneNo: string;
}

export interface AuthNoCheckRequest {
  phoneNo: string;
  authNo: string;
}

export interface FindIdRequest {
  name: string;
  birthDate: string;
  phoneNo: string;
  authKey: string;
}

export interface FindPasswordRequest {
  username: string;
  name: string;
  birthDate: string;
  phoneNo: string;
  authKey: string;
}

export interface FindPasswordChangeRequest {
  userId: number;
  password: string;
  authKey: string;
}
