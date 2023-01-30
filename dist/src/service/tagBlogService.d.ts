declare class tagBlogService {
    private tagBlogRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (blogTag: any) => Promise<void>;
}
declare const _default: tagBlogService;
export default _default;
