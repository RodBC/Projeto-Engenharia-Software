import { Test, TestingModule } from '@nestjs/testing';
import { ParticipateService } from './participate.service';

describe('LikesService', () => {
  let service: ParticipateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParticipateService],
    }).compile();

    service = module.get<ParticipateService>(ParticipateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
