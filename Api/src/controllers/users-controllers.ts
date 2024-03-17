import User from "../models/user.js";
import { NextFunction, Request, Response } from "express"
import { hash, compare } from "bcrypt"
import { createToken } from "../utils/token-manager.js";
import user from "../models/user.js";


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
        const userFound = await User.findOne({ email });
        if (userFound) return res.status(401).send("user Already exist");
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        //create token and store cookies

        res.clearCookie("auth_token", { path: "/", domain: "localhost", httpOnly: true, signed: true, })
        const token = createToken(userFound.id.toString(), userFound.email, "7d");
        res.cookie("auth_token", token, { path: "/", domain: "localhost", httpOnly: true, signed: true, expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) })
        return res.status(201).json({ message: "user Added", });
    } catch (error) {
        return res.status(500).json({ message: "ok", error })
    }
}

export const userlogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const userFound = await User.findOne({ email });
        if (!userFound) {
            return res.status(401).send("User does not exist");
        }
        const isPasswordCorrect = await compare(password, userFound.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect Password");
        }

        //create token and store cookies

        res.clearCookie("auth_token", { path: "/", domain: "localhost", httpOnly: true, signed: true, })
        const token = createToken(userFound.id.toString(), userFound.email, "7d");
        res.cookie("auth_token", token, { path: "/", domain: "localhost", httpOnly: true, signed: true, expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) })
        return res.status(200).send("Login successful");
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
}
