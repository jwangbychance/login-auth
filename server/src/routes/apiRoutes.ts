import express, { Request, Response } from "express";
import {
  userCheck,
  signupUser,
  loginUser,
  logoutUser,
} from "../controllers/userController";
import passport from "../passport/index";

interface IGetUserAuthInfoRequest extends Request {
  user: {
    username: string;
  };
}

const router = express.Router();

router.get("/user", userCheck);

router.post("/sign-up", signupUser);

router.post(
  "/log-in",
  loginUser,
  passport.authenticate("local"),
  (req, res: Response) => {
    const typedReq = req as IGetUserAuthInfoRequest;

    if (!typedReq.user || !typedReq.user.username) {
      res.status(500).json({ error: "User is not authenticated" });
    } else {
      const userInfo = {
        username: typedReq.user.username,
      };
      res.json({ userInfo });
    }
  }
);

router.post("/log-out", logoutUser);

export default router;
