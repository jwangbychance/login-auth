import User from "../models/user.js";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";

const checkPassword = async (passwordHash, password) => {
  try {
    return await bcrypt.compare(passwordHash, password);
  } catch (err) {
    throw err;
  }
};

const strategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return done(null, false, { message: "Incorrect username/password" });
    }

    const match = await checkPassword(user.password, password);

    if (!match) {
      return done(null, false, { message: "Incorrect username/password" });
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

export default strategy;
