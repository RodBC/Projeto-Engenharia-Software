import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password } = createUserDto;

    const user = new User();
    const salt = await bcrypt.genSalt();

    Object.assign(user, createUserDto);

    user.password = await bcrypt.hash(password, salt);

    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
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

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    Object.assign(user, updateUserDto);

    return this.userRepository.save(user);
  }

  async updatePassword(
    id: string,
    old_password: string,
    new_password: string,
  ): Promise<User> {
    const user = await this.findOne(id);

    if (!user) {
      return;
    }

    if (!(await user.validatePassword(old_password))) {
      throw new Error('Invalid password');
    }

    if (old_password === new_password) {
      throw new Error('New password must be different from old password');
    }

    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(new_password, salt);

    return this.userRepository.save(user);
  }
}
