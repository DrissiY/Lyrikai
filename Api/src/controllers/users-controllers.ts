import User from "../models/user.js";
import { NextFunction, Request, Response } from "express"
import { hash } from "bcrypt"


export const getAllusers = async (re: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.find();
        return res.status(201).json({ message: "ok", User })
    } catch (error) {
        return res.status(500).json({ message: "ok", error })
    }
}

export const userSignUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = await req.body;
        const hashedPassword = await hash(password, 10);
        const users = new User({ name, email, password: hashedPassword });
        return res.status(200).json({ message: "user Added", });
    } catch (error) {
        return res.status(500).json({ message: "ok", error })
    }
}

export const userlogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = await req.body;
        const userFound = await User.findOne({ email });
        if (userFound) {

        }
    } catch (error) {
        return res.status(500).json({ message: "ok", error })
    }
}
