import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import listUsersController from "../controllers/user/listUsers.controller";
import isAdmMiddleware from "../middlewares/isAdm.middleware";
import isAuthMiddleware from "../middlewares/isAuth.middleware";


const userRoutes = Router()

userRoutes.post("", createUserController)
userRoutes.get("", isAuthMiddleware, isAdmMiddleware, listUsersController)
userRoutes.delete("/:id", isAuthMiddleware, isAdmMiddleware, deleteUserController)

export default userRoutes