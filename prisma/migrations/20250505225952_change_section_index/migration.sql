/*
  Warnings:

  - You are about to drop the column `sectionsId` on the `fields` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "fields" DROP CONSTRAINT "fields_sectionsId_fkey";

-- AlterTable
ALTER TABLE "fields" DROP COLUMN "sectionsId",
ADD COLUMN     "sectionId" INTEGER;

-- AddForeignKey
ALTER TABLE "fields" ADD CONSTRAINT "fields_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;
