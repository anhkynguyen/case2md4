import { Router } from "express";
import HomeController from "../controller/HomeController";
export const blogRouter = Router()
blogRouter.get('/delete/:id',HomeController.delete)
blogRouter.post('/delete/:id',HomeController.delete)
blogRouter.get('/edit/:id',HomeController.showFormEdit)
blogRouter.post('/edit/:id',HomeController.update)





