import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password, array_of_groups } = createUserDto;

    const user = new User();
    const salt = await bcrypt.genSalt();

    user.email = email;
    user.name = name;
    user.password = await bcrypt.hash(password, salt);
    user.array_of_groups = array_of_groups;

    return this.userRepository.save(user);
  }

  async find(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
