/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignInDto } from '../users/dto/sign_in.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

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

    if (!user) return null;

    if (await user.validatePassword(password)) {
      return user;
    } else {
      throw new UnauthorizedException('Invalid password');
    }
  }

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;

    const user = await this.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const payload = { sub: user.id, email: user.email };

    return { 
      access_token: await this.jwtService.signAsync(payload),
      user_id: user.id // Incluindo o ID do usuário no objeto retornado
    };
  }
}
