import { Decimal } from '@prisma/client/runtime';

export class CreateLedgerTransactionDto {
  accountId: string;
  transactionDate: Date;
  amount: Decimal;
}
