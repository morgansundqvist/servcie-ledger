import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LedgerJournalLineService } from './ledger-journal-line.service';
import { CreateLedgerJournalLineDto } from './dto/create-ledger-journal-line.dto';
import { UpdateLedgerJournalLineDto } from './dto/update-ledger-journal-line.dto';

@Controller('ledger-journal-line')
export class LedgerJournalLineController {
  constructor(
    private readonly ledgerJournalLineService: LedgerJournalLineService,
  ) {}

  @Post()
  create(@Body() createLedgerJournalLineDto: CreateLedgerJournalLineDto) {
    return this.ledgerJournalLineService.create({
      journal: { connect: { id: createLedgerJournalLineDto.journalId } },
      fiscalYearAccount: {
        connect: { id: createLedgerJournalLineDto.accountId },
      },
      transactionDate: createLedgerJournalLineDto.transactionDate,
      amount: createLedgerJournalLineDto.amount,
    });
  }

  @Get()
  findAll() {
    return this.ledgerJournalLineService.findMany({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ledgerJournalLineService.findOne({ id: id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLedgerJournalLineDto: UpdateLedgerJournalLineDto,
  ) {
    return this.ledgerJournalLineService.update({
      where: { id: id },
      data: updateLedgerJournalLineDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ledgerJournalLineService.remove({ id: id });
  }
}
