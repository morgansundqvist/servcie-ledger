-- CreateTable
CREATE TABLE "FiscalYear" (
    "id" TEXT NOT NULL,
    "fromDate" DATE NOT NULL,
    "toDate" DATE NOT NULL,

    CONSTRAINT "FiscalYear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FiscalYearAccount" (
    "id" TEXT NOT NULL,
    "fiscalYearId" TEXT NOT NULL,
    "accountCode" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "startingBalance" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "FiscalYearAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LedgerTransaction" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "createdDateTime" TIMESTAMPTZ NOT NULL,
    "transactionDate" DATE NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "LedgerTransaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FiscalYearAccount" ADD CONSTRAINT "FiscalYearAccount_fiscalYearId_fkey" FOREIGN KEY ("fiscalYearId") REFERENCES "FiscalYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LedgerTransaction" ADD CONSTRAINT "LedgerTransaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "FiscalYearAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
