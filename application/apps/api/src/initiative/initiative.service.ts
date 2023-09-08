/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Initiative } from './initiative.entity';


@Injectable()
export class InitiativeService {
  constructor(
    @Inject('INITIATIVE_REPOSITORY')
    private initiativeRepository: Repository<Initiative>,
  ) {}
}
