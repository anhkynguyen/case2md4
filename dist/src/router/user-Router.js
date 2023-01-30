"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/UserController"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/login', UserController_1.default.showFormLogin);
exports.userRouter.get('/register', UserController_1.default.showFormRegister);
exports.userRouter.post('/login', UserController_1.default.login);
exports.userRouter.post('/register', UserController_1.default.register);
exports.userRouter.get('/homeUser', UserController_1.default.showHomeUser);
//# sourceMappingURL=user-Router.js.map