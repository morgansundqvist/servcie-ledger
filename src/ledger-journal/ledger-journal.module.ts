import { Module } from '@nestjs/common';
import { LedgerJournalService } from './ledger-journal.service';
import { LedgerJournalController } from './ledger-journal.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LedgerJournalController],
  providers: [LedgerJournalService, PrismaService],
})
export class LedgerJournalModule {}
