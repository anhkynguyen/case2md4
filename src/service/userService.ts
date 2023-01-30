
import { AppDataSource } from '../data-source';
import { User } from '../model/user';
class UserService {
    private userRepository;

    constructor(){
 this.userRepository = AppDataSource.getRepository(User)
    }

save = async(user) =>{
   return await this.userRepository.save(user)
}
checkUser = async(user)=>{
    let userCheck = await this.userRepository.findOneBy({username:user.username, password: user.password})
 
    
    if(!userCheck){
        return null
    }
    else{
        return userCheck
    }

}

}
export default new UserService()