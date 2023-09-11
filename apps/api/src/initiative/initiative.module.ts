import { Module } from '@nestjs/common';
import { InitiativeService } from './initiative.service';
import { initiativeProviders } from './initiative.provider';
import { DatabaseModule } from 'src/database/database.module';
import { InitiativeController } from './initiative.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [InitiativeController],
  providers: [...initiativeProviders, InitiativeService],
  exports: [InitiativeService],
})
export class InitiativeModule {}
