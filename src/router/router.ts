import { Router } from "express";
import HomeController from "../controller/HomeController";

import { blogRouter } from "./blog-Router";


export const router = Router()
router.use('/blogs',blogRouter)
router.use('/tags',HomeController.getTags)



