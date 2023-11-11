import axios from "axios";
import {
  ICreateMessageResponse,
  IGetMessagesResponse,
} from "../interfaces/IStatusResponse";
import { IMessages } from "../interfaces/IMessage";

export const createMessage = async (
  username: string | undefined,
  content: string,
  date: Date
): Promise<ICreateMessageResponse> => {
  try {
    const { status } = await axios.post<string>("/api/create-message", {
      username,
      content,
      date,
    });
    return { status: status };
  } catch (err: unknown) {
    throw err;
  }
};

export const viewMessages = async (): Promise<IGetMessagesResponse> => {
  try {
    const { status, messages } = await axios.get<
      IMessages[],
      IGetMessagesResponse
    >("/api/view-messages");
    return { status: status, messages: messages };
  } catch (err: unknown) {
    throw err;
  }
};
