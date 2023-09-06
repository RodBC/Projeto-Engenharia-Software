import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findOne(userId: string): Promise<import("./user.entity").User>;
    findAll(): Promise<import("./user.entity").User[]>;
}
