import express from "express";
import { signupUser, loginUser } from "../controllers/userController.js";
import passport from "../passport/index.js";

const router = express.Router();

router.post("/sign-up", signupUser);
router.post(
  "/log-in",
  loginUser,
  passport.authenticate("local"),
  (req, res) => {
    const userInfo = {
      username: req.user.username,
    };
    res.json({ userInfo });
  }
);

export default router;
