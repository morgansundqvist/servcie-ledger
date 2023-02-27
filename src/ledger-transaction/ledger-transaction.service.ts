import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateLedgerTransactionDto } from './dto/create-ledger-transaction.dto';
import { UpdateLedgerTransactionDto } from './dto/update-ledger-transaction.dto';

@Injectable()
export class LedgerTransactionService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.LedgerTransactionCreateInput,
  ): Promise<UpdateLedgerTransactionDto> {
    return this.prisma.ledgerTransaction.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.LedgerTransactionWhereUniqueInput;
    data: Prisma.LedgerTransactionUpdateInput;
  }): Promise<UpdateLedgerTransactionDto> {
    const { where, data } = params;
    return this.prisma.ledgerTransaction.update({
      data,
      where,
    });
  }

  async findOne(
    ledgerTransactionWhereUniqueInput: Prisma.LedgerTransactionWhereUniqueInput,
  ): Promise<UpdateLedgerTransactionDto | null> {
    return this.prisma.ledgerTransaction.findUnique({
      where: ledgerTransactionWhereUniqueInput,
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LedgerTransactionWhereUniqueInput;
    where?: Prisma.LedgerTransactionWhereInput;
    orderBy?: Prisma.LedgerTransactionOrderByWithRelationInput;
  }): Promise<UpdateLedgerTransactionDto[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.ledgerTransaction.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async remove(
    where: Prisma.LedgerTransactionWhereUniqueInput,
  ): Promise<UpdateLedgerTransactionDto> {
    return this.prisma.ledgerTransaction.delete({
      where,
    });
  }
}
