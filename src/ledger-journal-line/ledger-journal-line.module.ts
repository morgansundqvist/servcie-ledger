import { Module } from '@nestjs/common';
import { LedgerJournalLineService } from './ledger-journal-line.service';
import { LedgerJournalLineController } from './ledger-journal-line.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LedgerJournalLineController],
  providers: [LedgerJournalLineService, PrismaService],
})
export class LedgerJournalLineModule {}
