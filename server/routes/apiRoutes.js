import express from "express";
import { getUsers, getUserById } from "../controllers/userController.js";

const router = express.Router();

router.get("/api/users", getUsers);
router.get("/api/user/:id", getUserById);

export default router;
