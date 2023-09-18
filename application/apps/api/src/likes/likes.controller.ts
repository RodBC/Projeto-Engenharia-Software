/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { LikesService } from './likes.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserId } from 'src/auth/userId.decorator';

@Controller('likes')
@UseGuards(JwtAuthGuard)
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post('/:id')
  create(
    @UserId() userId: string,
    @Param('id') initiativeId: string,
  ) {
    return this.likesService.create(userId, initiativeId);
  }

  @Get()
  findAll() {
    return this.likesService.findAll();
  }

  @Get('/user')
  findAllByUser(@UserId() userId: string) {
    return this.likesService.findAllByUser(userId);
  }

  @Get('/:initiativeId')
  findOne(@UserId() userId: string, @Param('initiativeId') initiativeId: string) {
    return this.likesService.findOne(userId, initiativeId);
  }

  @Delete('/:initiativeId')
  remove(@UserId() userId: string, @Param('initiativeId') initaitiveId: string) {
    return this.likesService.remove(userId, initaitiveId);
  }
}
