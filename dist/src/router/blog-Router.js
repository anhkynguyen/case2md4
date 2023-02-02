"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const role_1 = require("./../middleware/role");
const auth_1 = require("./../middleware/auth");
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
exports.blogRouter = (0, express_1.Router)();
exports.blogRouter.get('/:id', HomeController_1.default.findById);
exports.blogRouter.use(auth_1.auth);
exports.blogRouter.get('/', HomeController_1.default.getAll);
exports.blogRouter.post('/', role_1.checkRole, HomeController_1.default.create);
exports.blogRouter.delete('/:id', role_1.checkRole, HomeController_1.default.delete);
exports.blogRouter.put('/:id', role_1.checkRole, HomeController_1.default.update);
//# sourceMappingURL=blog-Router.js.map