import { Test, TestingModule } from '@nestjs/testing';
import { IsValidTokenController } from './is-valid-token.controller';

describe('IsValidTokenController', () => {
  let controller: IsValidTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IsValidTokenController],
    }).compile();

    controller = module.get<IsValidTokenController>(IsValidTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
