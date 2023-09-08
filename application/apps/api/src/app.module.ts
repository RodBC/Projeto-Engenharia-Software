import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { InitiativeModule } from './initiative/initiative.module';

@Module({
    imports:[UsersModule, DatabaseModule, AuthModule, ConfigModule, InitiativeModule],
})
export class AppModule {}
