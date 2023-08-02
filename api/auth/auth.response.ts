export interface LoginResponse {
  accessToken: string;
  isFirstLogin: boolean;
}

export interface AuthNoCheckResponse {
  authKey: string;
}
