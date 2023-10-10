import passport from "passport";
import strategy from "./localStrategy";
import User from "../models/user";

type User = {
  id?: number,
}

passport.serializeUser((user:User, done) => {
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
