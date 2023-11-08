export interface ISignupResponse {
  status: number;
}

export interface ILoginResponse {
  status: number;
}

export interface IGetUserResponse {
  status: number;
  userDetails: IGetUserResponseBody;
}

export interface IGetUserResponseBody {
  username: string;
  member: boolean;
}

export interface Response {
  response: {
    status: number;
    data: string;
  };
}
