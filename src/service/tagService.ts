import { AppDataSource } from '../data-source';
import { Tag } from "../model/tag"

class TagService {
    private tagRepository
    constructor(){
        this.tagRepository = AppDataSource.getRepository(Tag)
    }
    getAll = async() =>{
        let sql = `select * from tag`
        return await this.tagRepository.query(sql)
    }
}
export default new TagService()