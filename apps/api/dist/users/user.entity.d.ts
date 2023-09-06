export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    array_of_groups: string;
    validatePassword(password: string): Promise<boolean>;
}
