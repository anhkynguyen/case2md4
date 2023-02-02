import { checkRole } from './../middleware/role';
import { auth } from './../middleware/auth';
import { Router } from "express";
import HomeController from "../controller/HomeController";
export const blogRouter = Router()
blogRouter.get('/:id',HomeController.findById)
blogRouter.use(auth)
blogRouter.get('/',HomeController.getAll)
blogRouter.post('/',checkRole,HomeController.create)
blogRouter.delete('/:id',checkRole,HomeController.delete)
blogRouter.put('/:id',checkRole,HomeController.update)










