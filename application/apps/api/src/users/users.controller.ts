/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { OwnerGuard } from '../auth/owner.guard';
// import { UserInterface } from "./user.model";

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('/')
  @UseGuards(OwnerGuard)
  async findOne(@Query('userId') userId: string) {
    if (!userId) {
      return;
    }
    const user = await this.usersService.findOne(userId);
    // remover password do user se ele existir
    if (user) {
      delete user.password;
    }
    return user;
  }

  @Get('/email')
  @UseGuards(OwnerGuard)
  async findByEmail(@Query('email') email: string) {
    if (!email) {
      return;
    }
    const user = await this.usersService.findByEmail(email);
    // remover password do user se ele existir
    if (user) {
      delete user.password;
    }
    return user;
  }

  @Get('/all')
  async findAll() {
    const users = await this.usersService.findAll();

    // remover password do retorno
    users.forEach((user) => {
      delete user.password;
    });

    return users;
  }
}
