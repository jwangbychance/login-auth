import express from "express";
import {
  getUsers,
  getUserById,
  signupUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.post("/sign-up", signupUser);

export default router;
