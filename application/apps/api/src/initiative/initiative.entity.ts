/* eslint-disable prettier/prettier */
import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";;

@Entity()
export class Initiative {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({nullable: false})
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

    @ManyToOne(() => User)
    @JoinColumn({ name: 'ownerId' })
    owner: User;
}
