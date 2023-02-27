import { Test, TestingModule } from '@nestjs/testing';
import { LedgerTransactionController } from './ledger-transaction.controller';
import { LedgerTransactionService } from './ledger-transaction.service';

describe('LedgerTransactionController', () => {
  let controller: LedgerTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LedgerTransactionController],
      providers: [LedgerTransactionService],
    }).compile();

    controller = module.get<LedgerTransactionController>(LedgerTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
