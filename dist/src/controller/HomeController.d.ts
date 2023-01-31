import { Request, Response } from "express";
declare class HomeController {
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    getTags: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HomeController;
export default _default;
