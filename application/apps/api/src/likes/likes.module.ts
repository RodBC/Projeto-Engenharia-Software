import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { DatabaseModule } from 'src/database/database.module';
import { likeProviders } from './like.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...likeProviders, LikesService],
  controllers: [LikesController],
  exports: [LikesService],
})
export class LikesModule {}
