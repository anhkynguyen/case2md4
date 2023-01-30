import { Router } from "express";
import { userRouter } from "./user-Router";
import { blogRouter } from "./blog-Router";
import homeController from "../controller/HomeController"


export const router = Router()
router.use('/user',userRouter)
router.use('/blog',blogRouter)

router.get('/home', homeController.showHome)
// router.post('/create', homeController.createBlogTag)

router.get('/create', homeController.showFormCreate)
router.post('/create', homeController.create)


