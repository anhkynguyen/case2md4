"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
const blog_Router_1 = require("./blog-Router");
const user_Router_1 = require("./user-Router");
exports.router = (0, express_1.Router)();
exports.router.use('/auth', user_Router_1.userRouter);
exports.router.use('/blogs', blog_Router_1.blogRouter);
exports.router.use('/tags', HomeController_1.default.getTags);
//# sourceMappingURL=router.js.map