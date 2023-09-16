import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { refreshTokenProviders } from './refresh_token.provider';
import { DatabaseModule } from 'src/database/database.module';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Reflector } from '@nestjs/core';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    UsersModule,
    DatabaseModule,
  ],
  providers: [
    ...refreshTokenProviders,
    AuthService,
    JwtStrategy,
    JwtAuthGuard,
    Reflector,
  ],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
