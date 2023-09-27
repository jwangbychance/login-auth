import express from "express";
import {
  userCheck,
  signupUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";
import passport from "../passport/index.js";

const router = express.Router();

router.get("/user", userCheck);

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

router.get("/log-out", logoutUser);

export default router;
