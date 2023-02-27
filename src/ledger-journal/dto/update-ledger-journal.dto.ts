import { PartialType } from '@nestjs/mapped-types';
import { CreateLedgerJournalDto } from './create-ledger-journal.dto';

export class UpdateLedgerJournalDto extends PartialType(
  CreateLedgerJournalDto,
) {
  id: string;
}
