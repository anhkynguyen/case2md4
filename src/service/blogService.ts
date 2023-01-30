
import { AppDataSource } from '../data-source';
import { Blog } from '../model/blog';
class BlogService {
    private blogRepository;

    constructor(){
 this.blogRepository = AppDataSource.getRepository(Blog)
    }

save = async(blog) =>{
   return await this.blogRepository.save(blog)
}
getAll = async() =>{
    let sql = `select * from blog join tag on blog.tag = tag.idTag`
    return await this.blogRepository.query(sql)
}
searchByName = async( nameSearch ) =>{
    let sql = `select * from blog where blog.name LIKE '% ${nameSearch} %'`
    return await this.blogRepository.query(sql)
}




findById = async(id) =>{
    return await this.blogRepository.findOneBy({idBlog:id})
}
remove = async(id) =>{
    let blog =  await this.blogRepository.findOneBy({idBlog:id})
    if(!blog){
        return null
    }
    return this.blogRepository.delete({idBlog:id})
}
update = async(id,newBlog) =>{
    let blog =  await this.blogRepository.findOneBy({idBlog:id})
    if(!blog){
        return null
    }
    return this.blogRepository.update({idBlog:id},newBlog)
}
}
export default new BlogService()