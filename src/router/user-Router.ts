import { Router } from "express";
import UserController from "../controller/UserController";
export const userRouter = Router()
userRouter.get('/login',UserController.showFormLogin)
userRouter.get('/register',UserController.showFormRegister)
userRouter.post('/login',UserController.login)
userRouter.post('/register',UserController.register)
userRouter.get('/homeUser',UserController.showHomeUser)


