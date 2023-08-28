import User from "../models/user.js";
import asyncHandler from "express-async-handler";

export const getUserById = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: User detail: ${req.params.id}`);
});

export const getUsers = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: User detail: ${req.params.id}`);
});

export const signupUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username & password are required" });
  }

  try {
    // check if user already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({
        message:
          "Username already exists. Please login or try another username.",
      });
    }

    const user = await User.create({
      username: username,
      password: password,
    });
    await user.save();
    return res.status(200);
  } catch (err) {
    return next(err);
  }
});
