import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group {
    @PrimaryGeneratedColumn() 
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
}
