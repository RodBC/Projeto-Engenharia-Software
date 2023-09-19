import { Test, TestingModule } from '@nestjs/testing';
import { ParticipateController } from './participate.controller';
import { ParticipateService } from './participate.service';

describe('ParticipateController', () => {
  let controller: ParticipateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParticipateController],
      providers: [ParticipateService],
    }).compile();

    controller = module.get<ParticipateController>(ParticipateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
