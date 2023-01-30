import { Request, Response } from "express";
import tagService from "../service/tagService";

import blogService from "../service/blogService";
import tagBlogService from "../service/tagBlogService";

class HomeController {
  constructor() {}

  showHome = async (req: Request, res: Response) => {
    let nameSearch = req.query.nameSearch;
    if (!nameSearch) {
      let blogs = await blogService.getAll();
      let tags = await tagService.getAll();
      res.render("home", { blogs: blogs, tags: tags });
    } else {
      let blogs = await blogService.searchByName(nameSearch);
      let tags = await tagService.getAll();
      res.render("home", { blogs: blogs, tags: tags });
    }
  };



  showFormCreate = async (req: Request, res: Response) => {
    let tags = await tagService.getAll();
    res.render("create", { tags: tags });
  };



  showFormEdit = async (req: Request, res: Response) => {
    let id = req.params.id;
    let blogs = await blogService.findById(id);
    let tags = await tagService.getAll();
    res.render("edit", { blogs: blogs, tags: tags });
  };



  create = async (req: Request, res: Response) => {
    if (req.files) {
      let image = req.files.image;
      if ("mv" in image) {
        await image.mv("./public/images" + image.name);
        let blog = req.body;
      
        
        blog.image = "/images/" + image.name;
        await blogService.save(blog);  
        console.log(blog.tag);
        console.log(blog.idBlog)
        res.redirect(301, "/home");
      }
    }
  };



  delete = async (req: Request, res: Response) => {
    let id = req.params.id;
    await blogService.remove(id);
    res.redirect(301, "/home");
  };



  update = async (req: Request, res: Response) => {
    // if (req.files) {
    //     let image = req.files.image;
    //     if ('mv' in image) {
    //         await image.mv('./public/images' + image.name)
    let blog = req.body;
    let id = req.params.id;
    // blog.image = '/images/' + image.name;
    await blogService.update(id, blog);
    res.redirect(301, "/home");
    //     }
    // }
  };
//   createBlogTag = async (req: Request, res: Response) => {
//     let idTag = [req.body.tag]
//     console.log(idTag);
    
// let tagBlog 
//     for (let i = 0; i < idTag.length; i++) {
// let idBlog = req.body.id
// console.log(idBlog);

//   let tagBlog1=idTag[i]
//   tagBlog = {idBlog,tagBlog1}
// console.log(tagBlog);

//  await tagBlogService.save(tagBlog)
//     }
  
   
//     res.redirect(301, "/home");
//   };
}
export default new HomeController();
