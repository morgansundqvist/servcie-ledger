import { Module } from '@nestjs/common';
import { VerificationInstanceService } from './verification-instance.service';
import { VerificationInstanceController } from './verification-instance.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [VerificationInstanceController],
  providers: [VerificationInstanceService, PrismaService],
})
export class VerificationInstanceModule {}
