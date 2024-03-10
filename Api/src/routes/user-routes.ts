import { Router } from "express";
import { getAllusers, userSignUp } from "../controllers/users-controllers.js";
import { validate, signUpValidator } from "../utils/validator.js";


const userRoutes = Router();

userRoutes.get("/", getAllusers);
userRoutes.post("/signup", validate(signUpValidator), userSignUp)

export default userRoutes;