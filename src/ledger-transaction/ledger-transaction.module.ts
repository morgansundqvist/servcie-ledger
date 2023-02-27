import { Module } from '@nestjs/common';
import { LedgerTransactionService } from './ledger-transaction.service';
import { LedgerTransactionController } from './ledger-transaction.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LedgerTransactionController],
  providers: [LedgerTransactionService, PrismaService],
})
export class LedgerTransactionModule {}
