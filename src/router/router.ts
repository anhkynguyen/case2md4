import { Router } from "express";
import HomeController from "../controller/HomeController";

import { blogRouter } from "./blog-Router";
import { userRouter } from "./user-Router";


export const router = Router()
router.use('/auth',userRouter)
router.use('/blogs',blogRouter)
router.use('/tags',HomeController.getTags)



