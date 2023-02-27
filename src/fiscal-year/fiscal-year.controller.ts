import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FiscalYearService } from './fiscal-year.service';
import { CreateFiscalYearDto } from './dto/create-fiscal-year.dto';
import { UpdateFiscalYearDto } from './dto/update-fiscal-year.dto';

@Controller('fiscal-year')
export class FiscalYearController {
  constructor(private readonly fiscalYearService: FiscalYearService) {}

  @Post()
  create(@Body() createFiscalYearDto: CreateFiscalYearDto) {
    return this.fiscalYearService.create(createFiscalYearDto);
  }

  @Get()
  findAll() {
    return this.fiscalYearService.findMany({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fiscalYearService.findOne({ id: id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFiscalYearDto: UpdateFiscalYearDto,
  ) {
    return this.fiscalYearService.update({
      where: { id: id },
      data: updateFiscalYearDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fiscalYearService.remove({ id: id });
  }
}
