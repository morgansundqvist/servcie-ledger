import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateLedgerJournalLineDto } from './dto/create-ledger-journal-line.dto';
import { UpdateLedgerJournalLineDto } from './dto/update-ledger-journal-line.dto';

@Injectable()
export class LedgerJournalLineService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.LedgerJournalLineCreateInput,
  ): Promise<UpdateLedgerJournalLineDto> {
    return this.prisma.ledgerJournalLine.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.LedgerJournalLineWhereUniqueInput;
    data: Prisma.LedgerJournalLineUpdateInput;
  }): Promise<UpdateLedgerJournalLineDto> {
    const { where, data } = params;
    return this.prisma.ledgerJournalLine.update({
      data,
      where,
    });
  }

  async findOne(
    ledgerJournalLineWhereUniqueInput: Prisma.LedgerJournalLineWhereUniqueInput,
  ): Promise<UpdateLedgerJournalLineDto | null> {
    return this.prisma.ledgerJournalLine.findUnique({
      where: ledgerJournalLineWhereUniqueInput,
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LedgerJournalLineWhereUniqueInput;
    where?: Prisma.LedgerJournalLineWhereInput;
    orderBy?: Prisma.LedgerJournalLineOrderByWithRelationInput;
  }): Promise<UpdateLedgerJournalLineDto[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.ledgerJournalLine.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async remove(
    where: Prisma.LedgerJournalLineWhereUniqueInput,
  ): Promise<UpdateLedgerJournalLineDto> {
    return this.prisma.ledgerJournalLine.delete({
      where,
    });
  }
}
