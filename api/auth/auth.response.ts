export interface LoginResponse {
  accessToken: string;
  isFirstLogin: boolean;
}

export interface AuthNoCheckResponse {
  authKey: string;
}

export interface FindIdResponse {
  items: {
    companyName: string;
    username: string;
    createdAt: string;
  }[];
}
