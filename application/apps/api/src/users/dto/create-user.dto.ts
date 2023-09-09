/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        description: 'The name of the user',
        required: true,
    })
    name: string;

    @ApiProperty({
        description: 'The password of the user',
        required: true,
    })
    password: string;

    @ApiProperty({
        description: 'The email of the user',
        required: true,
    })
    email: string;
}
