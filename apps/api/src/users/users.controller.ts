import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { OwnerGuard } from 'src/auth/owner.guard';
// import { UserInterface } from "./user.model";

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // async create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Get('/')
  @UseGuards(OwnerGuard)
  async findOne(@Query('userId') userId: string) {
    if (!userId) {
      return;
    }
    return this.usersService.findOne(userId);
  }

  @Get('/all')
  // @UseGuards(AuthGuard('jwt'))
  async find() {
    return this.usersService.find();
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
