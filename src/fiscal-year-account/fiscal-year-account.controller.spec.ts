import { Test, TestingModule } from '@nestjs/testing';
import { FiscalYearAccountController } from './fiscal-year-account.controller';
import { FiscalYearAccountService } from './fiscal-year-account.service';

describe('FiscalYearAccountController', () => {
  let controller: FiscalYearAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiscalYearAccountController],
      providers: [FiscalYearAccountService],
    }).compile();

    controller = module.get<FiscalYearAccountController>(FiscalYearAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
