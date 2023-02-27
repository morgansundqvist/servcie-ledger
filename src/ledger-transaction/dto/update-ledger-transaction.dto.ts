import { PartialType } from '@nestjs/mapped-types';
import { CreateLedgerTransactionDto } from './create-ledger-transaction.dto';

export class UpdateLedgerTransactionDto extends PartialType(
  CreateLedgerTransactionDto,
) {
  id: string;
}
