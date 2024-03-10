import user from "../models/user.js";
import { NextFunction, Request, Response } from "express";

export const getAllusers = async (re: Request, res: Response, next: NextFunction) => {
    try {
        const users = await user.find();
        return res.status(200).json({ message: "ok", user })
    } catch (error) {
        return res.status(500).json({ message: "ok", error })
    }
}

