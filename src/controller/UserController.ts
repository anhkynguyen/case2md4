

import { Request, Response } from "express"
import tagService from "../service/tagService"
import blogService from "../service/blogService"
import UserService from "../service/userService"


 class UserController{
    private userService
    constructor(){
        this.userService = UserService

    }
showFormLogin = async (req :Request, res: Response)=>{
 res.render('./user/login')
}
showFormRegister = async (req :Request, res: Response)=>{
    res.render('./user/register')
   }
   login = async (req: Request, res: Response) => {
    let user = await this.userService.checkUser(req.body);
    if (user) {
      // @ts-ignore
 req.session.User = user;
   // @ts-ignore

 
      if (user.username === "admin" && user.password === "1") {
        res.redirect(301, "/home");
      } else {
        res.redirect(301, "/user/homeUser")
    
      }
    } else {
      res.redirect(301, "/user/login");
    }
}
register = async (req: Request, res: Response) => {

let user = req.body;
    await UserService.save(user);
    res.redirect(301, "/user/login");
   
}

showHomeUser = async (req: Request, res: Response) => {
  let blogs = await blogService.getAll();
  let tags = await tagService.getAll()
  res.render("homeUser", { blogs: blogs ,tags:tags});
};


}
export default new UserController()