import User from "../models/user.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import passport from "../passport/index.js";

// const checkPassword = async (passwordHash, password) => {
//   try {
//     await bcrypt.compare(passwordHash, password);
//   } catch (err) {
//     throw err;
//   }
// };

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

  // try {
  //   const user = await User.findOne({ username });

  //   if (!user) {
  //     return res.status(401).json({ message: "Incorrect username/password" });
  //   }

  //   const match = await checkPassword(user.password, password);

  //   if (!match) {
  //     return res.status(401).json({ message: "Incorrect username/password" });
  //   }

  //   return res.status(201).json({ user });
  // } catch (err) {
  //   console.error(err);
  //   res.status(500);
  //   return next(err);
  // }
  // passport.authenticate("local"),
  //   (req, res) => {
  //     const userInfo = {
  //       username: req.user.username,
  //     };
  //     res.json({ userInfo });
  //   };
});
