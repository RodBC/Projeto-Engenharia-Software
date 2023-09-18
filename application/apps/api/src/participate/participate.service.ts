import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Participate } from './entities/participate.entity';

@Injectable()
export class ParticipateService {
  constructor(
    @Inject('PARTICIPATE_REPOSITORY')
    private participateRepository: Repository<Participate>,
  ) {}

  create(userId: string, initiativeId: string) {
    const participate = new Participate();

    participate.userId = userId;
    participate.initiativeId = initiativeId;

    return this.participateRepository.save(participate);
  }

  findAll() {
    return this.participateRepository.find();
  }

  findAllByUser(userId: string) {
    return this.participateRepository.find({
      where: {
        userId: userId,
      },
    });
  }

  findAllByInitiative(initiativeId: string) {
    return this.participateRepository.find({
      where: {
        initiativeId: initiativeId,
      },
    });
  }

  findOne(userId: string, initiativeId: string) {
    return this.participateRepository.findOne({
      where: {
        userId: userId,
        initiativeId: initiativeId,
      },
    });
  }

  remove(userId: string, initiativeId: string) {
    return this.participateRepository.delete({
      userId: userId,
      initiativeId: initiativeId,
    });
  }
}
