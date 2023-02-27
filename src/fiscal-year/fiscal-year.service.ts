import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateFiscalYearDto } from './dto/create-fiscal-year.dto';
import { UpdateFiscalYearDto } from './dto/update-fiscal-year.dto';

@Injectable()
export class FiscalYearService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.FiscalYearCreateInput,
  ): Promise<UpdateFiscalYearDto> {
    return this.prisma.fiscalYear.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.FiscalYearWhereUniqueInput;
    data: Prisma.FiscalYearUpdateInput;
  }): Promise<UpdateFiscalYearDto> {
    const { where, data } = params;
    return this.prisma.fiscalYear.update({
      data,
      where,
    });
  }

  async findOne(
    fiscalYearWhereUniqueInput: Prisma.FiscalYearWhereUniqueInput,
  ): Promise<UpdateFiscalYearDto | null> {
    return this.prisma.fiscalYear.findUnique({
      where: fiscalYearWhereUniqueInput,
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FiscalYearWhereUniqueInput;
    where?: Prisma.FiscalYearWhereInput;
    orderBy?: Prisma.FiscalYearOrderByWithRelationInput;
  }): Promise<UpdateFiscalYearDto[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.fiscalYear.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async remove(
    where: Prisma.FiscalYearWhereUniqueInput,
  ): Promise<UpdateFiscalYearDto> {
    return this.prisma.fiscalYear.delete({
      where,
    });
  }
}
