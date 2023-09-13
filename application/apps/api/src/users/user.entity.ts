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

  @Column("text", { nullable: true })
  description: string;

  @Column("text", { nullable: true })
  imgUrl: string;

  @Column("text", { nullable: true })
  bannerUrl: string;

  @Column("text", { array: true, nullable: true })
  socials: string[];

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
