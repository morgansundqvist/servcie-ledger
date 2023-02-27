import { Decimal } from '@prisma/client/runtime';
import { IsDecimal, IsNumber, IsString } from 'class-validator';

export class CreateFiscalYearAccountDto {
  @IsString()
  fiscalYearId: string;
  @IsString()
  accountCode: string;
  @IsString()
  accountName: string;
  @IsDecimal()
  startingBalance: Decimal;
}
