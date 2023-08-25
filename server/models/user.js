import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, maxLength: 50 },
  password: { type: String, required: true },
});

UserSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 8);
  this.password = hashedPassword;
  next();
});

export default mongoose.model("User", UserSchema);
