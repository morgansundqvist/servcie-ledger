import { Test, TestingModule } from '@nestjs/testing';
import { LedgerJournalLineService } from './ledger-journal-line.service';

describe('LedgerJournalLineService', () => {
  let service: LedgerJournalLineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LedgerJournalLineService],
    }).compile();

    service = module.get<LedgerJournalLineService>(LedgerJournalLineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
