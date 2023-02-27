import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FiscalYearAccountService } from './fiscal-year-account.service';
import { CreateFiscalYearAccountDto } from './dto/create-fiscal-year-account.dto';
import { UpdateFiscalYearAccountDto } from './dto/update-fiscal-year-account.dto';

@Controller('fiscal-year-account')
export class FiscalYearAccountController {
  constructor(
    private readonly fiscalYearAccountService: FiscalYearAccountService,
  ) {}

  @Post()
  create(@Body() createFiscalYearAccountDto: CreateFiscalYearAccountDto) {
    return this.fiscalYearAccountService.create({
      accountCode: createFiscalYearAccountDto.accountCode,
      accountName: createFiscalYearAccountDto.accountName,
      fiscalYear: { connect: { id: createFiscalYearAccountDto.fiscalYearId } },
      startingBalance: createFiscalYearAccountDto.startingBalance,
    });
  }

  @Get()
  findAll() {
    return this.fiscalYearAccountService.findMany({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fiscalYearAccountService.findOne({ id: id });
  }

  @Get(':id/full')
  findOneFull(@Param('id') id: string) {
    return this.fiscalYearAccountService.findOne({ id: id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFiscalYearAccountDto: UpdateFiscalYearAccountDto,
  ) {
    return this.fiscalYearAccountService.update({
      where: { id: id },
      data: updateFiscalYearAccountDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fiscalYearAccountService.remove({ id: id });
  }
}
