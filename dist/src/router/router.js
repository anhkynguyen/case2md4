"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_Router_1 = require("./user-Router");
const blog_Router_1 = require("./blog-Router");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
exports.router = (0, express_1.Router)();
exports.router.use('/user', user_Router_1.userRouter);
exports.router.use('/blog', blog_Router_1.blogRouter);
exports.router.get('/home', HomeController_1.default.showHome);
exports.router.get('/create', HomeController_1.default.showFormCreate);
exports.router.post('/create', HomeController_1.default.create);
//# sourceMappingURL=router.js.map