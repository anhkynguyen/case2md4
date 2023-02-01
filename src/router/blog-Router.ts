import { auth } from './../middleware/auth';
import { Router } from "express";
import HomeController from "../controller/HomeController";
export const blogRouter = Router()
blogRouter.use(auth)
blogRouter.get('/',HomeController.getAll)
blogRouter.post('/',HomeController.create)
blogRouter.delete('/:id',HomeController.delete)
blogRouter.put('/:id',HomeController.update)
blogRouter.get('/:id',HomeController.findById)









