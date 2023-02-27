import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateFiscalYearAccountDto } from './dto/create-fiscal-year-account.dto';
import { UpdateFiscalYearAccountDto } from './dto/update-fiscal-year-account.dto';

@Injectable()
export class FiscalYearAccountService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.FiscalYearAccountCreateInput,
  ): Promise<UpdateFiscalYearAccountDto> {
    return this.prisma.fiscalYearAccount.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.FiscalYearAccountWhereUniqueInput;
    data: Prisma.FiscalYearAccountUpdateInput;
  }): Promise<UpdateFiscalYearAccountDto> {
    const { where, data } = params;
    return this.prisma.fiscalYearAccount.update({
      data,
      where,
    });
  }

  async findOne(
    fiscalYearAccountWhereUniqueInput: Prisma.FiscalYearAccountWhereUniqueInput,
  ): Promise<UpdateFiscalYearAccountDto | null> {
    return this.prisma.fiscalYearAccount.findUnique({
      where: fiscalYearAccountWhereUniqueInput,
    });
  }
  async findOneFull(
    fiscalYearAccountWhereUniqueInput: Prisma.FiscalYearAccountWhereUniqueInput,
  ) {
    let account = await this.prisma.fiscalYearAccount.findUnique({
      where: fiscalYearAccountWhereUniqueInput,
    });

    let sumAmount = this.prisma.ledgerTransaction.aggregate({
      _sum: { amount: true },
    });
    return account;
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FiscalYearAccountWhereUniqueInput;
    where?: Prisma.FiscalYearAccountWhereInput;
    orderBy?: Prisma.FiscalYearAccountOrderByWithRelationInput;
  }): Promise<UpdateFiscalYearAccountDto[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.fiscalYearAccount.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async remove(
    where: Prisma.FiscalYearAccountWhereUniqueInput,
  ): Promise<UpdateFiscalYearAccountDto> {
    return this.prisma.fiscalYearAccount.delete({
      where,
    });
  }
}
