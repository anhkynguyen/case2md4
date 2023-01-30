"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const tagBlog_1 = require("../model/tagBlog");
class tagBlogService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from blogTag `;
            return await this.tagBlogRepository.query(sql);
        };
        this.save = async (blogTag) => {
            await this.tagBlogRepository.save(blogTag);
        };
        this.tagBlogRepository = data_source_1.AppDataSource.getRepository(tagBlog_1.TagBlog);
    }
}
exports.default = new tagBlogService();
//# sourceMappingURL=tagBlogService.js.map