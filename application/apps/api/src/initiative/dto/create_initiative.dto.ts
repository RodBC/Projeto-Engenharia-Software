/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class CreateInitiativeDto {
    @ApiProperty({
        description: 'The name of the initiative',
        required: true,
    })
    name: string;

    @ApiProperty({
        description: 'The description of the initiative',
        required: true,
    })
    description: string;

    @ApiProperty({
        description: 'The images of the initiative',
        required: false,
        nullable: true,
        isArray: true,
    })
    images: string[];

    @ApiProperty({
        description: 'The bairro of the initiative',
        required: true,
    })
    neighborhood: string;

    @ApiProperty({
        description: 'The icon of the initiative',
        required: false,
        nullable: true,
    })
    icon: string;

    @ApiProperty({
        description: 'The socials of the initiative',
        required: false,
        nullable: true,
        isArray: true,
    })
    socials: string[];
}
