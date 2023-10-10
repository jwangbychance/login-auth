import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "../interfaces/IUser";

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, maxLength: 50 },
  password: { type: String, required: true },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

export default model<IUser>("User", UserSchema);
