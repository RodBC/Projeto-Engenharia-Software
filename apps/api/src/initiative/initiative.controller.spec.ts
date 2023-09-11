import { Test, TestingModule } from '@nestjs/testing';
import { InitiativeController } from './initiative.controller';

describe('InitiativeController', () => {
  let controller: InitiativeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InitiativeController],
    }).compile();

    controller = module.get<InitiativeController>(InitiativeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
