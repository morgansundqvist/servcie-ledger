import { Test, TestingModule } from '@nestjs/testing';
import { FiscalYearAccountService } from './fiscal-year-account.service';

describe('FiscalYearAccountService', () => {
  let service: FiscalYearAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiscalYearAccountService],
    }).compile();

    service = module.get<FiscalYearAccountService>(FiscalYearAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
