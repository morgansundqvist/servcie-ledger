import { PartialType } from '@nestjs/mapped-types';
import { CreateLedgerJournalLineDto } from './create-ledger-journal-line.dto';

export class UpdateLedgerJournalLineDto extends PartialType(
  CreateLedgerJournalLineDto,
) {
  id: string;
}
