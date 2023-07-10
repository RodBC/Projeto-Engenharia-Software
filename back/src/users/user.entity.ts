import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    array_of_groups: string;

    constructor(user?: Partial<User>) {
        // Preenche os valores, se fornecidos 
        Object.assign(this, user);
    }
}
