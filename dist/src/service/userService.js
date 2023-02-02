"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const auth_1 = require("../middleware/auth");
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserService {
    constructor() {
        this.register = async (user) => {
            user.password = await bcrypt_1.default.hash(user.password, 10);
            return this.userRepository.save(user);
        };
        this.checkUser = async (user) => {
            let userCheck = await this.userRepository.findOneBy({
                username: user.username,
            });
            if (!userCheck) {
                return "User is not exist !!";
            }
            else {
                let passwordCompare = await bcrypt_1.default.compare(user.password, userCheck.password);
                if (!passwordCompare) {
                    return "password is wrong !!";
                }
                else {
                    let payload = {
                        idUser: userCheck.idUser,
                        username: userCheck.username,
                        role: userCheck.role,
                    };
                    let token = jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 360000,
                    });
                    let check = {
                        idUser: userCheck.idUser,
                        username: userCheck.username,
                        role: userCheck,
                        token: token,
                    };
                    return check;
                }
            }
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map