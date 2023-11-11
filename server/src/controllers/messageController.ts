import Message from "../models/message";
import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import { IMessage } from "../interfaces/IMessage";
import "dotenv/config";

export const createMessage = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, content, date }: IMessage = req.body;
    try {
      await Message.create({
        username: username,
        content: content,
        date: date,
      });
    } catch (err: unknown) {
      console.error(err);
    }
  }
);

export const viewMessages = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const messages = await Message.find({});

      res.status(200).json({ messages });
    } catch (err: unknown) {
      console.error(err);
    }
  }
);
