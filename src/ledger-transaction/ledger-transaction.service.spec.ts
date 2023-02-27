import { Test, TestingModule } from '@nestjs/testing';
import { LedgerTransactionService } from './ledger-transaction.service';

describe('LedgerTransactionService', () => {
  let service: LedgerTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LedgerTransactionService],
    }).compile();

    service = module.get<LedgerTransactionService>(LedgerTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
