"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tagService_1 = __importDefault(require("../service/tagService"));
const blogService_1 = __importDefault(require("../service/blogService"));
class HomeController {
    constructor() {
        this.showHome = async (req, res) => {
            let nameSearch = req.query.nameSearch;
            if (!nameSearch) {
                let blogs = await blogService_1.default.getAll();
                let tags = await tagService_1.default.getAll();
                res.render("home", { blogs: blogs, tags: tags });
            }
            else {
                let blogs = await blogService_1.default.searchByName(nameSearch);
                let tags = await tagService_1.default.getAll();
                res.render("home", { blogs: blogs, tags: tags });
            }
        };
        this.showFormCreate = async (req, res) => {
            let tags = await tagService_1.default.getAll();
            res.render("create", { tags: tags });
        };
        this.showFormEdit = async (req, res) => {
            let id = req.params.id;
            let blogs = await blogService_1.default.findById(id);
            let tags = await tagService_1.default.getAll();
            res.render("edit", { blogs: blogs, tags: tags });
        };
        this.create = async (req, res) => {
            if (req.files) {
                let image = req.files.image;
                if ("mv" in image) {
                    await image.mv("./public/images" + image.name);
                    let blog = req.body;
                    blog.image = "/images/" + image.name;
                    await blogService_1.default.save(blog);
                    console.log(blog.tag);
                    console.log(blog.idBlog);
                    res.redirect(301, "/home");
                }
            }
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await blogService_1.default.remove(id);
            res.redirect(301, "/home");
        };
        this.update = async (req, res) => {
            let blog = req.body;
            let id = req.params.id;
            await blogService_1.default.update(id, blog);
            res.redirect(301, "/home");
        };
    }
}
exports.default = new HomeController();
//# sourceMappingURL=HomeController.js.map