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
import { ParticipateService } from './participate.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserId } from 'src/auth/userId.decorator';

@Controller('participate')
@UseGuards(JwtAuthGuard)
export class ParticipateController {
  constructor(private readonly participateService: ParticipateService) {}

  @Post('/:id')
  create(
    @UserId() userId: string,
    @Param('id') initiativeId: string,
  ) {
    return this.participateService.create(userId, initiativeId);
  }

  @Get()
  findAll() {
    return this.participateService.findAll();
  }

  @Get('/user')
  findAllByUser(@UserId() userId: string) {
    return this.participateService.findAllByUser(userId);
  }

  @Get('/:initiativeId')
  findOne(@UserId() userId: string, @Param('initiativeId') initiativeId: string) {
    return this.participateService.findOne(userId, initiativeId);
  }

  @Delete('/:initiativeId')
  remove(@UserId() userId: string, @Param('initiativeId') initaitiveId: string) {
    return this.participateService.remove(userId, initaitiveId);
  }
}
