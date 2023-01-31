"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const tag_1 = require("../model/tag");
class TagService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from tag`;
            return await this.tagRepository.query(sql);
        };
        this.tagRepository = data_source_1.AppDataSource.getRepository(tag_1.Tag);
    }
}
exports.default = new TagService();
//# sourceMappingURL=tagService.js.map