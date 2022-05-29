import { Test, TestingModule } from '@nestjs/testing';
import { CheckJwtService } from './check-jwt.service';

describe('CheckJwtService', () => {
  let service: CheckJwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckJwtService],
    }).compile();

    service = module.get<CheckJwtService>(CheckJwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
