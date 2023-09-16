/* eslint-disable prettier/prettier */
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignInDto } from '../users/dto/sign_in.dto';
import { User } from 'src/users/user.entity';
import { RefreshToken } from './refresh_token.entity';
import { Repository } from 'typeorm';
import { randomBytes } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @Inject('REFRESH_TOKEN_REPOSITORY')
    private readonly refreshTokenRepo: Repository<RefreshToken>,
  ) { }

  async createRefreshToken(userId: string): Promise<string> {
    const refreshToken = new RefreshToken();
    refreshToken.userId = userId;
    refreshToken.token = randomBytes(32).toString('hex');
    refreshToken.expiryDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);  // 1 week
    await this.refreshTokenRepo.save(refreshToken);
    return refreshToken.token;
  }

  async validateRefreshToken(userId: string, token: string) {
    const storedToken = await this.refreshTokenRepo.findOne({ where: { userId, token } });
    if (!storedToken) {
      return false;
    }

    await this.refreshTokenRepo.remove(storedToken);

    if (storedToken.expiryDate.getTime() < Date.now()) {
      return false;
    }
    return true;
  }

  async validateToken(token: string): Promise<User> {
    const decoded = this.jwtService.decode(token);

    if (!decoded) {
      return null;
    }

    const userId = decoded["sub"];

    const user = await this.usersService.findOne(userId);

    if (!user) {
      return null;
    }

    return user;
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user: User = await this.usersService.findByEmail(email);

    if (!user){
      throw new UnauthorizedException('Invalid credentials');
    };

    if (!(await user.validatePassword(password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async createJwtToken(user: User): Promise<string> {
    const payload = { sub: user.id, email: user.email };

    return (await this.jwtService.signAsync(payload));
  }

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;

    const user = await this.validateUser(email, password);

    return {
      access_token: await this.createJwtToken(user),
      refresh_token: await this.createRefreshToken(user.id),
      user: user
    };
  }
}
