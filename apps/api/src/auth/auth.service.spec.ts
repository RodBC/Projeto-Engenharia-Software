import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from '../users/users.service';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: jest.Mocked<UsersService>;
  let jwtService: jest.Mocked<JwtStrategy>;

  beforeEach(async () => {
    usersService = {
      findOne: jest.fn(),
      findByEmail: jest.fn(),
      findAll: jest.fn(),
    } as any;

    usersService = {
      validate: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          global: true,
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '1h' },
        }),
      ],
      providers: [
        AuthService,
        { provide: UsersService, useValue: usersService },
        { provide: JwtStrategy, useValue: jwtService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });
});
