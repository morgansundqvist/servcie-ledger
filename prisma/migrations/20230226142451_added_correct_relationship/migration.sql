-- AlterTable
ALTER TABLE "LedgerTransaction" ADD COLUMN     "verificationInstanceId" TEXT;

-- AddForeignKey
ALTER TABLE "LedgerTransaction" ADD CONSTRAINT "LedgerTransaction_verificationInstanceId_fkey" FOREIGN KEY ("verificationInstanceId") REFERENCES "VerificationInstance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
