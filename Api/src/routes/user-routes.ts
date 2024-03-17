import { Router } from "express";
import { getAllusers, userSignUp, userlogin } from "../controllers/users-controllers.js";
import { validate, signUpValidator, loginValidator } from "../utils/validator.js";


const userRoutes = Router();

userRoutes.get("/", getAllusers);
userRoutes.post("/signup", validate(signUpValidator), userSignUp)
userRoutes.post("/login", validate(loginValidator), userlogin)

export default userRoutes;