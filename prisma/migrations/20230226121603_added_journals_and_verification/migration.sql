-- CreateTable
CREATE TABLE "Verification" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "suffix" TEXT NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationInstance" (
    "id" TEXT NOT NULL,
    "verificationId" TEXT NOT NULL,
    "fiscalYearId" TEXT NOT NULL,
    "createdDateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transactionId" TEXT NOT NULL,
    "lockedNumber" SERIAL NOT NULL,

    CONSTRAINT "VerificationInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LedgerJournal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isPosted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "LedgerJournal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LedgerJournalLine" (
    "id" TEXT NOT NULL,
    "journalId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "createdDateTime" TIMESTAMPTZ NOT NULL,
    "transactionDate" DATE NOT NULL,
    "isPosted" BOOLEAN NOT NULL DEFAULT false,
    "amount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "LedgerJournalLine_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VerificationInstance_transactionId_key" ON "VerificationInstance"("transactionId");

-- AddForeignKey
ALTER TABLE "VerificationInstance" ADD CONSTRAINT "VerificationInstance_verificationId_fkey" FOREIGN KEY ("verificationId") REFERENCES "Verification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationInstance" ADD CONSTRAINT "VerificationInstance_fiscalYearId_fkey" FOREIGN KEY ("fiscalYearId") REFERENCES "FiscalYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationInstance" ADD CONSTRAINT "VerificationInstance_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "LedgerTransaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerJournalLine" ADD CONSTRAINT "LedgerJournalLine_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "LedgerJournal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerJournalLine" ADD CONSTRAINT "LedgerJournalLine_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "FiscalYearAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
