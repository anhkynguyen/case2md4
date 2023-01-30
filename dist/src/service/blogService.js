"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const blog_1 = require("../model/blog");
class BlogService {
    constructor() {
        this.save = async (blog) => {
            return await this.blogRepository.save(blog);
        };
        this.getAll = async () => {
            let sql = `select * from blog join tag on blog.tag = tag.idTag`;
            return await this.blogRepository.query(sql);
        };
        this.searchByName = async (nameSearch) => {
            let sql = `select * from blog where blog.name LIKE '% ${nameSearch} %'`;
            return await this.blogRepository.query(sql);
        };
        this.findById = async (id) => {
            return await this.blogRepository.findOneBy({ idBlog: id });
        };
        this.remove = async (id) => {
            let blog = await this.blogRepository.findOneBy({ idBlog: id });
            if (!blog) {
                return null;
            }
            return this.blogRepository.delete({ idBlog: id });
        };
        this.update = async (id, newBlog) => {
            let blog = await this.blogRepository.findOneBy({ idBlog: id });
            if (!blog) {
                return null;
            }
            return this.blogRepository.update({ idBlog: id }, newBlog);
        };
        this.blogRepository = data_source_1.AppDataSource.getRepository(blog_1.Blog);
    }
}
exports.default = new BlogService();
//# sourceMappingURL=blogService.js.map