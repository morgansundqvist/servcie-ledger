import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateVerificationDto } from './dto/create-verification.dto';
import { UpdateVerificationDto } from './dto/update-verification.dto';

@Injectable()
export class VerificationService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.VerificationCreateInput,
  ): Promise<UpdateVerificationDto> {
    return this.prisma.verification.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.VerificationWhereUniqueInput;
    data: Prisma.VerificationUpdateInput;
  }): Promise<UpdateVerificationDto> {
    const { where, data } = params;
    return this.prisma.verification.update({
      data,
      where,
    });
  }

  async findOne(
    verificationWhereUniqueInput: Prisma.VerificationWhereUniqueInput,
  ): Promise<UpdateVerificationDto | null> {
    return this.prisma.verification.findUnique({
      where: verificationWhereUniqueInput,
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VerificationWhereUniqueInput;
    where?: Prisma.VerificationWhereInput;
    orderBy?: Prisma.VerificationOrderByWithRelationInput;
  }): Promise<UpdateVerificationDto[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.verification.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async remove(
    where: Prisma.VerificationWhereUniqueInput,
  ): Promise<UpdateVerificationDto> {
    return this.prisma.verification.delete({
      where,
    });
  }
}
