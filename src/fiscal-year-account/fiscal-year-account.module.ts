import { Module } from '@nestjs/common';
import { FiscalYearAccountService } from './fiscal-year-account.service';
import { FiscalYearAccountController } from './fiscal-year-account.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FiscalYearAccountController],
  providers: [FiscalYearAccountService, PrismaService],
})
export class FiscalYearAccountModule {}
