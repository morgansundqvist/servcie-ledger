import { Test, TestingModule } from '@nestjs/testing';
import { LedgerJournalLineController } from './ledger-journal-line.controller';
import { LedgerJournalLineService } from './ledger-journal-line.service';

describe('LedgerJournalLineController', () => {
  let controller: LedgerJournalLineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LedgerJournalLineController],
      providers: [LedgerJournalLineService],
    }).compile();

    controller = module.get<LedgerJournalLineController>(LedgerJournalLineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
