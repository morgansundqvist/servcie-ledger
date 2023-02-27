/*
  Warnings:

  - You are about to drop the column `transactionId` on the `VerificationInstance` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "VerificationInstance" DROP CONSTRAINT "VerificationInstance_transactionId_fkey";

-- DropIndex
DROP INDEX "VerificationInstance_transactionId_key";

-- AlterTable
ALTER TABLE "VerificationInstance" DROP COLUMN "transactionId";
