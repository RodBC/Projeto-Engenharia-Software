/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { OwnerGuard } from '../auth/owner.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserId } from 'src/auth/userId.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Public } from 'src/auth/public.decorator';
// import { UserInterface } from "./user.model";

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('/')
  @Public()
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
  @Public()
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
  async update(@UserId() userId, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService.update(userId, updateUserDto);

    // remover password do user se ele existir
    if (!user) {
      throw new Error('User not found');
    }

    delete user.password;
    return user;
  }

  @Put('/updatePassword')
  @UseGuards(OwnerGuard)
  async updatePassword(
    @UserId() userId,
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
  @Public()
  async findAll() {
    const users = await this.usersService.findAll();

    // remover password do retorno
    users.forEach((user) => {
      delete user.password;
    });

    return users;
  }
}
