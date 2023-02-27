import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class CreateLedgerJournalDto {
  @IsString()
  name: string;
  @IsDate()
  @Type(() => Date)
  bookingDate: Date;
}
