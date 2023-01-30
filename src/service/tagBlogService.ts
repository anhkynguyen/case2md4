import { AppDataSource } from '../data-source';
import { TagBlog } from '../model/tagBlog';

class tagBlogService {
    private tagBlogRepository
    constructor(){
        this.tagBlogRepository = AppDataSource.getRepository(TagBlog)
    }
    getAll = async() =>{
        let sql = `select * from blogTag `
        return await this.tagBlogRepository.query(sql)
    }
    save = async(blogTag) =>{
         await this.tagBlogRepository.save(blogTag)
     }
}
export default new tagBlogService()