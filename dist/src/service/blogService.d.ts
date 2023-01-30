declare class BlogService {
    private blogRepository;
    constructor();
    save: (blog: any) => Promise<any>;
    getAll: () => Promise<any>;
    searchByName: (nameSearch: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
    update: (id: any, newBlog: any) => Promise<any>;
}
declare const _default: BlogService;
export default _default;
