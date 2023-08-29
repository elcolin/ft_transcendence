import { User } from '@prisma/client';
export declare class UserController {
    getMe(user: User): {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        login: string;
        hash: string;
    };
}
