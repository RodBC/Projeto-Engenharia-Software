/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from '../users/users.service';
import { jwtConstants } from './constants';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcrypt';
import { SignInDto } from 'src/users/dto/sign_in.dto';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: jest.Mocked<UsersService>;
  let jwtService: jest.Mocked<JwtService>;

  beforeEach(async () => {
    usersService = {
      findOne: jest.fn(),
      findByEmail: jest.fn(),
      findAll: jest.fn(),
    } as any;

    jwtService = {
      signAsync: jest.fn(),
      decode: jest.fn(),
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
        { provide: JwtService, useValue: jwtService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return a user if valid email and password are provided', async () => {
      const password = '123';

      const user: User = Object.assign(new User(), {
        id: '1',
        name: 'John',
        email: 'john@example.com',
        password: await bcrypt.hash(password, await bcrypt.genSalt()), // hashed password
        array_of_groups: '',
      });

      usersService.findByEmail.mockResolvedValueOnce(user);

      jest.spyOn(user, 'validatePassword');

      const validUser = await authService.validateUser(user.email, password);

      expect(validUser).toBeDefined();
      expect(validUser).toEqual(user);
      expect(user.validatePassword).toHaveBeenCalled();
    });
  });

  describe('login', () => {
    it('should return a JWT token when provided a valid user', async () => {
      const password = '123';
      const user: User = Object.assign(new User(), {
        id: '1',
        name: 'John',
        email: 'john@example.com',
        password: await bcrypt.hash(password, await bcrypt.genSalt()), // hashed password
        array_of_groups: '',
      });

      jest.spyOn(user, 'validatePassword');
      jwtService.signAsync.mockResolvedValueOnce('jwt-token');
      usersService.findByEmail.mockResolvedValueOnce(user);

      const signInDto: SignInDto = {
        email: user.email,
        password: password,
      };

      const result = await authService.signIn(signInDto);

      expect(user.validatePassword).toHaveBeenCalled();
      expect(result).toBeDefined();
      expect(result.access_token).toEqual('jwt-token');
    });
  });

  describe('validateToken', () => {
    it('should return a user object if JWT token is valid', async () => {
      const jwt_token  = 'jwt-token';
      const user: User = Object.assign(new User(), {
        id: '1',
        name: 'John',
        email: 'john@example.com',
        array_of_groups: '',
      });

      jwtService.decode.mockReturnValueOnce({ sub: '1' });
      usersService.findOne.mockResolvedValueOnce(user);

      const result = await authService.validateToken(jwt_token);

      expect(result).toBeDefined();
      expect(result.id).toEqual(user.id);
    });
  });
});
