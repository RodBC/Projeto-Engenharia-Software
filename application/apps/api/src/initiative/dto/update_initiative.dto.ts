/* eslint-disable prettier/prettier */
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CreateInitiativeDto } from './create_initiative.dto';

export class UpdateInitiativeDto extends OmitType(CreateInitiativeDto, []) { }
