/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";;

@Entity()
export class Initiative {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    ownerId: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    images: string[];

    @Column()
    socials: string[];
}
