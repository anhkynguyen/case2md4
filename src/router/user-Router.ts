import { Router } from "express";
import UserController from "../controller/UserController";
export const userRouter = Router()
userRouter.post('/login',UserController.login)
userRouter.post('/register',UserController.register)


