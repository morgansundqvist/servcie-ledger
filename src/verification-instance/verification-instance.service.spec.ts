import { Test, TestingModule } from '@nestjs/testing';
import { VerificationInstanceService } from './verification-instance.service';

describe('VerificationInstanceService', () => {
  let service: VerificationInstanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerificationInstanceService],
    }).compile();

    service = module.get<VerificationInstanceService>(VerificationInstanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
