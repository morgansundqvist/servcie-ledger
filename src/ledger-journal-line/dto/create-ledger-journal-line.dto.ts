import { Decimal } from '@prisma/client/runtime';
import { Type } from 'class-transformer';
import { IsDate, IsDecimal, IsString } from 'class-validator';

export class CreateLedgerJournalLineDto {
  @IsString()
  journalId: string;
  @IsString()
  accountId: string;
  @IsDate()
  @Type(() => Date)
  transactionDate: Date;
  @IsDecimal()
  amount: Decimal;
}
