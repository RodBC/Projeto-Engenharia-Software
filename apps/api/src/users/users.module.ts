/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from './user.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UsersService,
  ],
  controllers: [UsersController], 
  exports: [UsersService]
})
export class UsersModule {}
