"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.login = async (req, res) => {
            let response = await this.userService.checkUser(req.body);
            res.status(200).json(response);
        };
        this.register = async (req, res) => {
            let user = await userService_1.default.register(req.body);
            res.status(201).json(user);
        };
        this.userService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map