import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VerificationInstanceService } from './verification-instance.service';
import { CreateVerificationInstanceDto } from './dto/create-verification-instance.dto';
import { UpdateVerificationInstanceDto } from './dto/update-verification-instance.dto';

@Controller('verification-instance')
export class VerificationInstanceController {
  constructor(
    private readonly verificationInstanceService: VerificationInstanceService,
  ) {}

  @Post()
  create(@Body() createVerificationInstanceDto: CreateVerificationInstanceDto) {
    return this.verificationInstanceService.create({
      verification: {
        connect: { id: createVerificationInstanceDto.verificationId },
      },
      fiscalYear: {
        connect: { id: createVerificationInstanceDto.fiscalYearId },
      },
    });
  }

  @Get()
  findAll() {
    return this.verificationInstanceService.findMany({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.verificationInstanceService.findOne({ id: id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVerificationInstanceDto: UpdateVerificationInstanceDto,
  ) {
    return this.verificationInstanceService.update({
      where: { id: id },
      data: updateVerificationInstanceDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.verificationInstanceService.remove({ id: id });
  }
}
