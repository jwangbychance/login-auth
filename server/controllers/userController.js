import User from "../models/user.js";
import asyncHandler from "express-async-handler";

export const userCheck = asyncHandler(async (req, res) => {
  console.log(req);
  return res.json({ user: req.user?.username });
});

export const signupUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username & password are required" });
  }

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({
        message:
          "Username already exists. Please login or try another username",
      });
    }

    const user = await User.create({
      username: username,
      password: password,
    });

    await user.save();

    return res.status(201).json({ user });
  } catch (err) {
    console.error(err);
    res.status(500);
    return next(err);
  }
});

export const loginUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username & password are required" });
  }

  next();
});
