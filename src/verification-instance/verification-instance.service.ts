import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateVerificationInstanceDto } from './dto/create-verification-instance.dto';
import { UpdateVerificationInstanceDto } from './dto/update-verification-instance.dto';

@Injectable()
export class VerificationInstanceService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.VerificationInstanceCreateInput,
  ): Promise<UpdateVerificationInstanceDto> {
    return this.prisma.verificationInstance.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.VerificationInstanceWhereUniqueInput;
    data: Prisma.VerificationInstanceUpdateInput;
  }): Promise<UpdateVerificationInstanceDto> {
    const { where, data } = params;
    return this.prisma.verificationInstance.update({
      data,
      where,
    });
  }

  async findOne(
    verificationInstanceWhereUniqueInput: Prisma.VerificationInstanceWhereUniqueInput,
  ): Promise<UpdateVerificationInstanceDto | null> {
    return this.prisma.verificationInstance.findUnique({
      where: verificationInstanceWhereUniqueInput,
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VerificationInstanceWhereUniqueInput;
    where?: Prisma.VerificationInstanceWhereInput;
    orderBy?: Prisma.VerificationInstanceOrderByWithRelationInput;
  }): Promise<UpdateVerificationInstanceDto[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.verificationInstance.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async remove(
    where: Prisma.VerificationInstanceWhereUniqueInput,
  ): Promise<UpdateVerificationInstanceDto> {
    return this.prisma.verificationInstance.delete({
      where,
    });
  }
}
