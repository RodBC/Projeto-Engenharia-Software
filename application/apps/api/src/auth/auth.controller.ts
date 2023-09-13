/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SignInDto } from '../users/dto/sign_in.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) { }

  @Post('sign-up')
  async signUp(@Body() registerUserDto: CreateUserDto) {
    return this.usersService.create(registerUserDto);
  }

  @Post('sign-in')
  async signIn(@Body() signInDto: SignInDto, @Res() res: Response) {
    const { user_id, access_token, refresh_token } =
      await this.authService.signIn(signInDto);

    res.cookie('jwt', access_token, { httpOnly: true });
    res.cookie('refreshToken', refresh_token, { httpOnly: true });

    return res.status(200).send({ user_id });
  }

  @Post('refresh')
  async refreshToken(@Req() request: Request, @Body() refreshTokenDto: { userId: string }, @Res() res: Response) {
    const refreshToken = request.cookies['refreshToken'];

    if (!refreshTokenDto.userId) {
      throw new UnauthorizedException('User id not provided');
    }

    if (!refreshToken || !(await this.authService.validateRefreshToken(refreshTokenDto.userId, refreshToken))) {
      throw new UnauthorizedException();
    }

    const user = await this.usersService.findOne(refreshTokenDto.userId);

    const new_jwt = this.authService.createJwtToken(user);
    const new_refresh_token = this.authService.createRefreshToken(refreshTokenDto.userId);

    res.cookie('jwt', new_jwt, { httpOnly: true });
    res.cookie('refreshToken', new_refresh_token, { httpOnly: true });

    res.status(200).send();
  }

  @Get('logout')
  async logout(@Res() res: Response) {
    res.clearCookie('jwt');
    res.clearCookie('refreshToken');

    return res.status(200).send();
  }
}
