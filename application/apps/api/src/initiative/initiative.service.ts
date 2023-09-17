/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Initiative } from './initiative.entity';
import { CreateInitiativeDto } from './dto/create_initiative.dto';
import { UpdateInitiativeDto } from './dto/update_initiative.dto';


@Injectable()
export class InitiativeService {
  constructor(
    @Inject('INITIATIVE_REPOSITORY')
    private initiativeRepository: Repository<Initiative>,
  ) {
  }

  async deleteAll(): Promise<void> {
    await this.initiativeRepository.clear(); // Isso apagará todas as entradas na tabela Initiative.
  }

  async create(createInitiativeDto: CreateInitiativeDto, owner_id: string): Promise<Initiative> {
    const initiative = new Initiative();

    Object.assign(initiative, createInitiativeDto);
    initiative.ownerId = owner_id;

    return this.initiativeRepository.save(initiative);
  }

  async findAll(): Promise<Initiative[]> {
    return this.initiativeRepository.find();
  }

  async findOneById(id: string): Promise<Initiative> {
    return this.initiativeRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findAllOwnedByUserId(userId: string): Promise<Initiative[]> {
    return this.initiativeRepository.find({
      where: {
        ownerId: userId,
      },
    });
  }

  async update(initiative: Initiative, updateInitiativeDto: UpdateInitiativeDto): Promise<Initiative> {
    Object.assign(initiative, updateInitiativeDto);

    return this.initiativeRepository.save(initiative);
  }
}
