import { AppDataSource } from '../data-source';
import { Tag } from "../model/tag"

class TagService {
    private tagRepository
    constructor(){
        this.tagRepository = AppDataSource.getRepository(Tag)
    }
    getAll = async() =>{
        return await this.tagRepository.find()
    }
}
export default new TagService()