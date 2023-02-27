import { Injectable } from '@nestjs/common';
import {
  FiscalYear,
  LedgerJournal,
  Prisma,
  Verification,
} from '@prisma/client';
import { CreateLedgerTransactionDto } from 'src/ledger-transaction/dto/create-ledger-transaction.dto';
import { UpdateLedgerTransactionDto } from 'src/ledger-transaction/dto/update-ledger-transaction.dto';
import { PrismaService } from '../prisma.service';
import { CreateLedgerJournalDto } from './dto/create-ledger-journal.dto';
import { UpdateLedgerJournalDto } from './dto/update-ledger-journal.dto';

@Injectable()
export class LedgerJournalService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.LedgerJournalCreateInput,
  ): Promise<UpdateLedgerJournalDto> {
    return this.prisma.ledgerJournal.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.LedgerJournalWhereUniqueInput;
    data: Prisma.LedgerJournalUpdateInput;
  }): Promise<UpdateLedgerJournalDto> {
    const { where, data } = params;
    return this.prisma.ledgerJournal.update({
      data,
      where,
    });
  }

  async findOne(
    ledgerJournalWhereUniqueInput: Prisma.LedgerJournalWhereUniqueInput,
  ): Promise<UpdateLedgerJournalDto | null> {
    return this.prisma.ledgerJournal.findUnique({
      where: ledgerJournalWhereUniqueInput,
    });
  }

  async findOneFull(
    ledgerJournalWhereUniqueInput: Prisma.LedgerJournalWhereUniqueInput,
  ) {
    return this.prisma.ledgerJournal.findUnique({
      where: ledgerJournalWhereUniqueInput,
      include: { journalLines: true },
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LedgerJournalWhereUniqueInput;
    where?: Prisma.LedgerJournalWhereInput;
    orderBy?: Prisma.LedgerJournalOrderByWithRelationInput;
  }): Promise<UpdateLedgerJournalDto[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.ledgerJournal.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async remove(
    where: Prisma.LedgerJournalWhereUniqueInput,
  ): Promise<UpdateLedgerJournalDto> {
    return this.prisma.ledgerJournal.delete({
      where,
    });
  }

  async checkValid(id: string) {
    let journal = await this.findOneFull({ id: id });

    if (journal.isPosted) return false;

    let totalAmount = 0;
    let lines = 0;
    for (let line of journal.journalLines) {
      totalAmount = totalAmount + line.amount.toNumber();
      lines++;
    }
    if (totalAmount !== 0 && lines < 2) return false;

    return true;
  }

  async postJournal(id: string) {
    if (!(await this.checkValid(id))) return false;

    let journal = await this.findOneFull({ id: id });

    let transactionsCreated: UpdateLedgerTransactionDto[] =
      await this.createLedgerTransactionsFromJournal(journal);

    let verification = await this.prisma.verification.findFirst({
      where: { isDefault: true },
    });

    if (verification === null) return false; //TODO should throw error

    let fiscalYear = await this.getFiscalYearFromBookingDate(
      journal.bookingDate,
    );

    if (fiscalYear === null) return false; //TODO should throw error

    let verificationInstance = await this.createVerificationInstanceForJournal(
      verification,
      fiscalYear,
      journal,
    );

    await this.connectVerificationInstanceToLedgerTransactions(
      transactionsCreated,
      verificationInstance,
    );
    await this.prisma.ledgerJournal.update({
      where: { id: journal.id },
      data: { isPosted: true },
    });
    return verificationInstance;
  }

  private async getFiscalYearFromBookingDate(bookingDate: Date) {
    return await this.prisma.fiscalYear.findFirst({
      where: {
        fromDate: {
          lte: bookingDate,
        },
        toDate: {
          gte: bookingDate,
        },
      },
    });
  }

  private async createVerificationInstanceForJournal(
    verification: Verification,
    fiscalYear: FiscalYear,
    journal: LedgerJournal,
  ) {
    return await this.prisma.verificationInstance.create({
      data: {
        verification: { connect: { id: verification.id } },
        fiscalYear: { connect: { id: fiscalYear.id } },
        bookingDescription: journal.name,
      },
    });
  }

  private async connectVerificationInstanceToLedgerTransactions(
    transactionsCreated: UpdateLedgerTransactionDto[],
    verificationInstance,
  ) {
    for (let trans of transactionsCreated) {
      await this.prisma.ledgerTransaction.update({
        where: { id: trans.id },
        data: {
          verificationInstance: { connect: { id: verificationInstance.id } },
        },
      });
    }
  }

  private async createLedgerTransactionsFromJournal(journal) {
    let transactionsToReturn: UpdateLedgerTransactionDto[] = [];
    for (let line of journal.journalLines) {
      let transaction: CreateLedgerTransactionDto = {
        accountId: line.accountId,
        amount: line.amount,
        transactionDate: line.transactionDate,
      };
      let createdTransaction = await this.prisma.ledgerTransaction.create({
        data: transaction,
      });
      transactionsToReturn.push(createdTransaction);
    }
    return transactionsToReturn;
  }
}
