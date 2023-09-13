/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { OwnerGuard } from '../auth/owner.guard';
import { UpdateUserDto } from './dto/update-user.dto';
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
    if (!user) {
      throw new Error('User not found');
    }
    delete user.password;
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
    if (!user) {
      throw new Error('User not found');
    }
    delete user.password;
    return user;
  }

  @Put('/update')
  @UseGuards(OwnerGuard)
  async update(@Query('userId') userId: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.update(userId, updateUserDto);

    // remover password do user se ele existir
    if (!user) {
      throw new Error('User not found');
    }

    delete user.password;
    return user;
  }

  @Post('/updatePassword')
  @UseGuards(OwnerGuard)
  async updatePassword(
    @Query('userId') userId: string,
    @Body('old_password') old_password: string,
    @Body('new_password') new_password: string,
  ) {
    const user = await this.usersService.updatePassword(
      userId,
      old_password,
      new_password,
    );

    // remover password do user se ele existir
    if (!user) {
      throw new Error('User not found');
    }

    delete user.password;
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
