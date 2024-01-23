import { Router } from "express";
import { login, logout, signup } from "../controllers/auth.js";

const authRouter = Router();

authRouter
    .post("/signup",signup)
    .get("/login",login)
    .delete("/logout",logout)

export default authRouter