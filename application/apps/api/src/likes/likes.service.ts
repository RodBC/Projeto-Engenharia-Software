import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Like } from './entities/like.entity';

@Injectable()
export class LikesService {
  constructor(
    @Inject('LIKE_REPOSITORY')
    private likeRepository: Repository<Like>,
  ) {}

  create(userId: string, initiativeId: string) {
    const like = new Like();

    like.userId = userId;
    like.initiativeId = initiativeId;

    return this.likeRepository.save(like);
  }

  findAll() {
    return this.likeRepository.find();
  }

  findAllByUser(userId: string) {
    return this.likeRepository.find({
      where: {
        userId: userId,
      },
    });
  }

  findAllByInitiative(initiativeId: string) {
    return this.likeRepository.find({
      where: {
        initiativeId: initiativeId,
      },
    });
  }

  findOne(userId: string, initiativeId: string) {
    return this.likeRepository.findOne({
      where: {
        userId: userId,
        initiativeId: initiativeId,
      },
    });
  }

  remove(userId: string, initiativeId: string) {
    return this.likeRepository.delete({
      userId: userId,
      initiativeId: initiativeId,
    });
  }
}
