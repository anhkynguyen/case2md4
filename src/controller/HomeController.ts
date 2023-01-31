import { Request, Response } from "express";
import tagService from "../service/tagService";

import blogService from "../service/blogService";
import tagBlogService from "../service/tagBlogService";

class HomeController {
  constructor() {}

  getAll = async (req: Request, res: Response) => {
    try {
      let blogs = await blogService.getAll();
      res.status(200).json(blogs)
    } catch (e) {
      res.status(500).json(e.message);
    }
  };
  getTags = async(req:Request, res: Response)=>{
    let tags = await tagService.getAll()
    res.status(200).json(tags)
  }
  create = async (req: Request, res: Response) => {
    let newBlog = await blogService.save(req.body);
    res.status(200).json(newBlog);
  };

  delete = async (req: Request, res: Response) => {
    let id = req.params.id;
    await blogService.remove(id);
    res.status(200).json();
  };

  update = async (req: Request, res: Response) => {
    let blog = req.body;
    let id = req.params.id;

    await blogService.update(id, blog);
    res.status(200).json()
  };
  
  findById = async (req: Request, res: Response) => {
    try {
      let id = req.params.id
      let blogs = await blogService.findById(id);
      res.status(200).json(blogs);
    } catch (e) {
      res.status(500).json(e.message);
    }
  };
}
export default new HomeController();
