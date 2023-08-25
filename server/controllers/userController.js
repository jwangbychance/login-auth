import UserSchema from "../models/user.js";
import asyncHandler from "express-async-handler";

export const getUserById = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: User detail: ${req.params.id}`);
});

export const getUsers = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: User detail: ${req.params.id}`);
});
