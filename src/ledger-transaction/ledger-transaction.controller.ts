import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LedgerTransactionService } from './ledger-transaction.service';
import { CreateLedgerTransactionDto } from './dto/create-ledger-transaction.dto';
import { UpdateLedgerTransactionDto } from './dto/update-ledger-transaction.dto';

@Controller('ledger-transaction')
export class LedgerTransactionController {
  constructor(
    private readonly ledgerTransactionService: LedgerTransactionService,
  ) {}
  @Post()
  create(@Body() createLedgerTransactionDto: CreateLedgerTransactionDto) {
    return this.ledgerTransactionService.create({
      amount: createLedgerTransactionDto.amount,
      fiscalYearAccount: {
        connect: { id: createLedgerTransactionDto.accountId },
      },
      transactionDate: createLedgerTransactionDto.transactionDate,
    });
  }

  @Get()
  findAll() {
    return this.ledgerTransactionService.findMany({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ledgerTransactionService.findOne({ id: id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLedgerTransactionDto: UpdateLedgerTransactionDto,
  ) {
    return this.ledgerTransactionService.update({
      where: { id: id },
      data: updateLedgerTransactionDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ledgerTransactionService.remove({ id: id });
  }
}
