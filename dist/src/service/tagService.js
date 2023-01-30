"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const tag_1 = require("../model/tag");
class TagService {
    constructor() {
        this.getAll = async () => {
            return await this.tagRepository.find();
        };
        this.tagRepository = data_source_1.AppDataSource.getRepository(tag_1.Tag);
    }
}
exports.default = new TagService();
//# sourceMappingURL=tagService.js.map