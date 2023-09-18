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

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    neighborhood: string;

    @Column("text", { array: true, nullable: true })
    images: string[];

    @Column("text", { array: true, nullable: true })
    socials: string[];

    @Column({ nullable: true })
    icon: string;
}
