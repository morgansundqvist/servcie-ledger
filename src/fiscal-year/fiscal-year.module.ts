import { Module } from '@nestjs/common';
import { FiscalYearService } from './fiscal-year.service';
import { FiscalYearController } from './fiscal-year.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FiscalYearController],
  providers: [FiscalYearService, PrismaService],
})
export class FiscalYearModule {}
