import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    description: 'The email of the user',
    required: true,
  })
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    required: true,
  })
  password: string;
}
