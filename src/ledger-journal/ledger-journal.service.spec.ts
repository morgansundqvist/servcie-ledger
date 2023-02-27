import { Test, TestingModule } from '@nestjs/testing';
import { Decimal } from '@prisma/client/runtime';
import { PrismaService } from '../prisma.service';
import { LedgerJournalService } from './ledger-journal.service';

describe('LedgerJournalService', () => {
  let service: LedgerJournalService;
  let mockPrismaService = new PrismaService();
  let createdLedgerJournal = {
    id: '83c5adb5-2cd0-4f5b-873f-c18368215f25',
    name: 'Tele2 Faktura F100001',
    isPosted: false,
    bookingDate: '2023-01-10T00:00:00.000Z',
    journalLines: [
      {
        id: '1772a068-6c88-49c3-89d1-5020b5acef08',
        journalId: 'c095bfb6-590b-440e-9baf-d8c39bbf04c9',
        accountId: 'a1fd95e8-f7af-4060-9a6b-48cd70d2ca4d',
        createdDateTime: '2023-02-26T13:37:36.420Z',
        transactionDate: '2023-02-26T00:00:00.000Z',
        isPosted: false,
        amount: new Decimal(2000),
      },
      {
        id: '4cebaa20-5ffc-41ab-81fc-b9a29649195a',
        journalId: 'c095bfb6-590b-440e-9baf-d8c39bbf04c9',
        accountId: '73abdd28-45ce-4338-8e6e-cd318b4eca9d',
        createdDateTime: '2023-02-26T13:41:17.610Z',
        transactionDate: '2023-02-26T00:00:00.000Z',
        isPosted: false,
        amount: new Decimal(-400),
      },
      {
        id: '8087bad8-6891-464a-b7df-0e08e65a99aa',
        journalId: 'c095bfb6-590b-440e-9baf-d8c39bbf04c9',
        accountId: '43fb343e-65cd-4b08-bd41-4973a95c3d2e',
        createdDateTime: '2023-02-26T13:46:15.942Z',
        transactionDate: '2023-02-26T00:00:00.000Z',
        isPosted: false,
        amount: new Decimal(-1600),
      },
    ],
  };

  let fiscalYear = {
    id: '7e85c642-c74a-412c-a60d-9266cf040e80',
    fromDate: '2023-01-01T00:00:00.000Z',
    toDate: '2023-12-31T00:00:00.000Z',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LedgerJournalService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    service = module.get<LedgerJournalService>(LedgerJournalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  mockPrismaService.ledgerJournal.create = jest
    .fn()
    .mockReturnValueOnce(createdLedgerJournal);

  it('should create LedgerJournal', async () => {
    let newLedgerJournal = await service.create({
      name: 'Tele2 Faktura F100001',
      bookingDate: '2023-01-10T00:00:00.000Z',
    });
    expect(newLedgerJournal).toStrictEqual(createdLedgerJournal);
  });

  mockPrismaService.ledgerJournal.findUnique = jest
    .fn()
    .mockResolvedValueOnce(createdLedgerJournal);

  it('should validate journal true', async () => {
    expect(await service.checkValid(createdLedgerJournal.id)).toBeTruthy();
  });

  mockPrismaService.fiscalYear.findFirst = jest
    .fn()
    .mockReturnValueOnce(fiscalYear);
});
