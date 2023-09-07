/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(["email"])
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    array_of_groups: string;

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
      }
}
