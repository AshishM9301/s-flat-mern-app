export interface LoginRequestBody {
  body: { email: string; password: string };
}

export interface LoginResponseData {
  success: boolean;
  data: UserData;
  accessToken: string;
  refreshToken: string;
}

export interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  _id: string;
}
