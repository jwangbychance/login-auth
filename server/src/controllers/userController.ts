import User from "../models/user";
import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import { IUser } from "../interfaces/IUser";
import "dotenv/config";

export const userCheck = asyncHandler(async (req: Request, res: Response) => {
  const user = req.user as IUser | undefined;
  res.json({ username: user?.username, member: user?.member });
});

export const signupUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password) {
      res
        .status(400)
        .json({ message: "Please enter a username and password." });
      return;
    }

    try {
      const existingUser = await User.findOne({ username });

      if (existingUser) {
        res.status(409).json({
          message:
            "Username already exists. Please login or try another username.",
        });
        return;
      }

      const user = await User.create({
        username: username,
        password: password,
        member: false,
      });

      await user.save();

      res.status(201).json({ user });
    } catch (err) {
      console.error(err);
      res.status(500);
      return next(err);
    }
  }
);

export const loginUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password) {
      res
        .status(400)
        .json({ message: "Please enter a username and password." });
    }

    next();
  }
);

export const logoutUser = asyncHandler(async (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: "Logged out successfully" });
  });
});

export const becomeMember = asyncHandler(async (req, res, next) => {
  const { username, memberKey } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user) {
      if (memberKey === process.env.MEMBER_KEY) {
        await user.updateOne({ member: true });
        res.status(200).json({ message: "Successfully joined as a member" });
      } else {
        res
          .status(403)
          .json({ message: "Please enter the correct member key" });
      }
    }
  } catch (err: unknown) {
    console.error(err);
    return next(err);
  }
});
