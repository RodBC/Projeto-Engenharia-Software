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

    @ApiProperty({
        description: 'The image url of the user',
        required: false,
        nullable: true,
    })
    imgUrl: string;

    @ApiProperty({
        description: 'The banner url of the user',
        required: false,
        nullable: true,
    })
    bannerUrl: string;

    @ApiProperty({
        description: 'The description of the user',
        required: false,
        nullable: true,
    })
    description: string;
}
