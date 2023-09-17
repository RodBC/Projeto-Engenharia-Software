/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SignInDto } from '../users/dto/sign_in.dto';
import { Request, Response } from 'express';
import { User } from 'src/users/user.entity';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserId } from './userId.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) { }

  async addAuthCookies(jwt: string, refreshToken: string, res: Response) {
    res.cookie('jwt', jwt);
    res.cookie('refreshToken', refreshToken);
    }

  @Post('/sign-up')
  async signUp(@Body() registerUserDto: CreateUserDto) {
    const user: User = await this.usersService.create(registerUserDto);
    delete user.password;

    return user
  }

  @Post('/sign-in')
  async signIn(@Body() signInDto: SignInDto, @Res() res: Response) {
    const { user, access_token, refresh_token } =
      await this.authService.signIn(signInDto);

    this.addAuthCookies(access_token, refresh_token, res);

    delete user.password;

    return res.status(200).send(user);
  }

  @Post('/refresh')
  @UseGuards(JwtAuthGuard)
  async refreshToken(@Req() request: Request, @Body() refreshTokenDto: { userId: string }, @Res() res: Response) {
    const refreshToken = request.cookies['refreshToken'];

    if (!refreshTokenDto.userId) {
      throw new UnauthorizedException('User id not provided');
    }

    if (!refreshToken || !(await this.authService.validateRefreshToken(refreshTokenDto.userId, refreshToken))) {
      throw new UnauthorizedException();
    }

    const user = await this.usersService.findOne(refreshTokenDto.userId);

    const new_jwt = await this.authService.createJwtToken(user);
    const new_refresh_token = await this.authService.createRefreshToken(refreshTokenDto.userId);

    this.addAuthCookies(new_jwt, new_refresh_token, res);

    res.status(200).send();
  }

  @Get('/logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Res() res: Response) {
    res.clearCookie('jwt');
    res.clearCookie('refreshToken');

    return res.status(200).send();
  }

  @Get('/check')
  @UseGuards(JwtAuthGuard)
  async check(@UserId() userId: string, @Res() res: Response) {
    res.status(200).send({ userId });
  }
}
