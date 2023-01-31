"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tagService_1 = __importDefault(require("../service/tagService"));
const blogService_1 = __importDefault(require("../service/blogService"));
class HomeController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let blogs = await blogService_1.default.getAll();
                res.status(200).json(blogs);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.getTags = async (req, res) => {
            let tags = await tagService_1.default.getAll();
            res.status(200).json(tags);
        };
        this.create = async (req, res) => {
            let newBlog = await blogService_1.default.save(req.body);
            res.status(200).json(newBlog);
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await blogService_1.default.remove(id);
            res.status(200).json();
        };
        this.update = async (req, res) => {
            let blog = req.body;
            let id = req.params.id;
            await blogService_1.default.update(id, blog);
            res.status(200).json();
        };
        this.findById = async (req, res) => {
            try {
                let id = req.params.id;
                let blogs = await blogService_1.default.findById(id);
                res.status(200).json(blogs);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
    }
}
exports.default = new HomeController();
//# sourceMappingURL=HomeController.js.map