import { Module } from '@nestjs/common';
import { ParticipateService } from './participate.service';
import { ParticipateController } from './participate.controller';
import { DatabaseModule } from 'src/database/database.module';
import { participateProviders } from './participate.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...participateProviders, ParticipateService],
  controllers: [ParticipateController],
  exports: [ParticipateService],
})
export class ParticipateModule {}
