import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LedgerJournalService } from './ledger-journal.service';
import { CreateLedgerJournalDto } from './dto/create-ledger-journal.dto';
import { UpdateLedgerJournalDto } from './dto/update-ledger-journal.dto';
import { Decimal } from '@prisma/client/runtime';

@Controller('ledger-journal')
export class LedgerJournalController {
  constructor(private readonly ledgerJournalService: LedgerJournalService) {}

  @Post()
  create(@Body() createLedgerJournalDto: CreateLedgerJournalDto) {
    return this.ledgerJournalService.create(createLedgerJournalDto);
  }

  @Get()
  findAll() {
    return this.ledgerJournalService.findMany({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ledgerJournalService.findOne({ id: id });
  }

  @Get(':id/full')
  findOneFull(@Param('id') id: string) {
    return this.ledgerJournalService.findOneFull({ id: id });
  }

  @Get(':id/check-valid')
  async checkValid(@Param('id') id: string) {
    return this.ledgerJournalService.checkValid(id);
  }

  @Post(':id/post-journal')
  async postJournal(@Param('id') id: string) {
    return this.ledgerJournalService.postJournal(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLedgerJournalDto: UpdateLedgerJournalDto,
  ) {
    return this.ledgerJournalService.update({
      where: { id: id },
      data: updateLedgerJournalDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ledgerJournalService.remove({ id: id });
  }
}
