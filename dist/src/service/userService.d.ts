declare class UserService {
    private userRepository;
    constructor();
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<"User is not exist !!" | "password is wrong !!" | {
        idUser: any;
        username: any;
        role: any;
        token: string;
    }>;
}
declare const _default: UserService;
export default _default;
