import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FiscalYearModule } from './fiscal-year/fiscal-year.module';
import { FiscalYearAccountModule } from './fiscal-year-account/fiscal-year-account.module';
import { VerificationModule } from './verification/verification.module';
import { VerificationInstanceModule } from './verification-instance/verification-instance.module';
import { LedgerJournalModule } from './ledger-journal/ledger-journal.module';
import { LedgerJournalLineModule } from './ledger-journal-line/ledger-journal-line.module';
import { LedgerTransactionModule } from './ledger-transaction/ledger-transaction.module';

@Module({
  imports: [FiscalYearModule, FiscalYearAccountModule, VerificationModule, VerificationInstanceModule, LedgerJournalModule, LedgerJournalLineModule, LedgerTransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
