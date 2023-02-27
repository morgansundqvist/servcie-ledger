import { Test, TestingModule } from '@nestjs/testing';
import { LedgerJournalController } from './ledger-journal.controller';
import { LedgerJournalService } from './ledger-journal.service';

describe('LedgerJournalController', () => {
  let controller: LedgerJournalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LedgerJournalController],
      providers: [LedgerJournalService],
    }).compile();

    controller = module.get<LedgerJournalController>(LedgerJournalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
