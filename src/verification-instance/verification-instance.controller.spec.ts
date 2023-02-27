import { Test, TestingModule } from '@nestjs/testing';
import { VerificationInstanceController } from './verification-instance.controller';
import { VerificationInstanceService } from './verification-instance.service';

describe('VerificationInstanceController', () => {
  let controller: VerificationInstanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VerificationInstanceController],
      providers: [VerificationInstanceService],
    }).compile();

    controller = module.get<VerificationInstanceController>(VerificationInstanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
