

import { Request, Response } from "express"
import UserService from "../service/userService"


 class UserController{
    private userService
    constructor(){
        this.userService = UserService

    }
   login = async (req: Request, res: Response) => {
    let response = await this.userService.checkUser(req.body);
    res.status(200).json(response)
    
    
}
register = async (req: Request, res: Response) => {

let user = await
     UserService.register(req.body);

   res.status(201).json(user)
} 
}
export default new UserController()