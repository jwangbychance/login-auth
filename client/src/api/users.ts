import axios from "axios";
import { ISignupResponse, ILoginResponse, IGetUserResponse, IGetUserResponseBody } from "../interfaces/IStatusResponse";

export const signupUser = async (username: string, password: string): Promise<ISignupResponse> => {
  try {
    const { status } = await axios.post<string>("/api/sign-up", {
      username,
      password,
    });
    return { status: status };
  } catch (err: unknown) {
    throw err;
  }
};

export const loginUser = async (username: string, password: string): Promise<ILoginResponse> => {
  try {
    const { status } = await axios.post<string>("/api/log-in", {
      username,
      password,
    });
    return { status: status };
  } catch (err: unknown) {
    throw err;
  }
};

export const getUser = async (): Promise<IGetUserResponse> => {
  try {
    const { status, data } = await axios.get<IGetUserResponseBody>("/api/user");
    return { status: status, userDetails: data };
  } catch (err: unknown) {
    throw err;
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await axios.post("/api/log-out").then((res) => {
      window.location.href = "/";
    });
  } catch (err: unknown) {
    throw err;
  }
};
