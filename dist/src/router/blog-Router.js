"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
exports.blogRouter = (0, express_1.Router)();
exports.blogRouter.get('/', HomeController_1.default.getAll);
exports.blogRouter.post('/', HomeController_1.default.create);
exports.blogRouter.delete('/:id', HomeController_1.default.delete);
exports.blogRouter.put('/:id', HomeController_1.default.update);
exports.blogRouter.get('/:id', HomeController_1.default.findById);
//# sourceMappingURL=blog-Router.js.map