import { AppDataSource } from "../data-source";
import { SECRET } from "../middleware/auth";
import { User } from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class UserService {
  private userRepository;
  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }
  register = async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
    return this.userRepository.save(user);
  };
  checkUser = async (user) => {
    let userCheck = await this.userRepository.findOneBy({
      username: user.username,
    });
    if (!userCheck) {
      return "User is not exist !!";
    } else {
      let passwordCompare = await bcrypt.compare(
        user.password,
        userCheck.password
      );

      if (!passwordCompare) {
        return "password is wrong !!";
      } else {
        let payload = {
          idUser: userCheck.idUser,
          username: userCheck.username,
          role: userCheck.role,
        };

        let token = jwt.sign(payload, SECRET, {
          expiresIn: 360000,
        });
        let check = {
          idUser: userCheck.idUser,
          username: userCheck.username,
          role: userCheck,
          token: token,
        };
        return check
      }
    }
  };
}
export default new UserService();
