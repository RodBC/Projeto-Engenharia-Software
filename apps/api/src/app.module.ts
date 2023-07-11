import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
    imports:[UsersModule, DatabaseModule],
})
export class AppModule {}
