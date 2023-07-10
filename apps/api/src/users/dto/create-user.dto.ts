
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto{

    name: string;

    email: string;

    array_of_groups: string;

}


//example doc:
// @ApiProperty({
//     description: 'The age of a cat',
//     minimum: 1,
//     default: 1,
//   })
//   age: number;