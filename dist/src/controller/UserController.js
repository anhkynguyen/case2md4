"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tagService_1 = __importDefault(require("../service/tagService"));
const blogService_1 = __importDefault(require("../service/blogService"));
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            res.render('./user/login');
        };
        this.showFormRegister = async (req, res) => {
            res.render('./user/register');
        };
        this.login = async (req, res) => {
            let user = await this.userService.checkUser(req.body);
            if (user) {
                req.session.User = user;
                if (user.username === "admin" && user.password === "1") {
                    res.redirect(301, "/home");
                }
                else {
                    res.redirect(301, "/user/homeUser");
                }
            }
            else {
                res.redirect(301, "/user/login");
            }
        };
        this.register = async (req, res) => {
            let user = req.body;
            await userService_1.default.save(user);
            res.redirect(301, "/user/login");
        };
        this.showHomeUser = async (req, res) => {
            let blogs = await blogService_1.default.getAll();
            let tags = await tagService_1.default.getAll();
            res.render("homeUser", { blogs: blogs, tags: tags });
        };
        this.userService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map