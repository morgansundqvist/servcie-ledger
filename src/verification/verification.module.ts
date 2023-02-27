import { Module } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { VerificationController } from './verification.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [VerificationController],
  providers: [VerificationService, PrismaService],
})
export class VerificationModule {}
