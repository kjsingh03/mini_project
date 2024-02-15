import { Router } from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";

const userRouter = Router();

userRouter
    .get("/",getAllUsers)
    .get("/:id",getUser)
    .put("/:id",updateUser)
    .delete("/:id",deleteUser)

export default userRouter