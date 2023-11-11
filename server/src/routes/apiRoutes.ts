import express, { Request, Response } from "express";
import {
  userCheck,
  signupUser,
  loginUser,
  logoutUser,
  becomeMember,
} from "../controllers/userController";
import passport from "../passport/index";
import { createMessage, viewMessages } from "../controllers/messageController";

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

router.put("/become-member", becomeMember);

router.post("/create-message", createMessage);

router.get("/view-messages", viewMessages);

export default router;
