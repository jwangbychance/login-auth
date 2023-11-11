import { Schema, model } from "mongoose";
import { IMessage } from "../interfaces/IMessage";

const MessageSchema = new Schema<IMessage>({
  username: { type: String, required: true, maxlength: 50 },
  content: { type: String, required: true },
  date: { type: Date, required: true },
});

export default model<IMessage>("Message", MessageSchema);
