import { Router } from "express";
import { getAllusers } from "../controllers/users-controllers.js";



const userRoutes = Router();

userRoutes.get("/", getAllusers);
export default userRoutes;