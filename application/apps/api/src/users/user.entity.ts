import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
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
