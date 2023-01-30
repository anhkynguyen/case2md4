"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
exports.blogRouter = (0, express_1.Router)();
exports.blogRouter.get('/delete/:id', HomeController_1.default.delete);
exports.blogRouter.post('/delete/:id', HomeController_1.default.delete);
exports.blogRouter.get('/edit/:id', HomeController_1.default.showFormEdit);
exports.blogRouter.post('/edit/:id', HomeController_1.default.update);
//# sourceMappingURL=blog-Router.js.map