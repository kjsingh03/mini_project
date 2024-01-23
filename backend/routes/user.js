import { Router } from "express";
import { deleteUser, getAllUsers, updateUser } from "../controllers/user.js";

const userRouter = Router();

userRouter
    .get("/",getAllUsers)
    .put("/:id",updateUser)
    .delete("/:id",deleteUser)

export default userRouter