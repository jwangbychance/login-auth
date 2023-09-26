import passport from "passport";
import strategy from "./localStrategy.js";
import User from "../models/user.js";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use(strategy);

export default passport;
