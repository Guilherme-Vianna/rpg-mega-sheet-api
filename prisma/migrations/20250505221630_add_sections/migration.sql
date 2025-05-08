-- AlterTable
ALTER TABLE "fields" ADD COLUMN     "sectionsId" INTEGER;

-- CreateTable
CREATE TABLE "sections" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "sheetId" INTEGER NOT NULL,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "sheets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fields" ADD CONSTRAINT "fields_sectionsId_fkey" FOREIGN KEY ("sectionsId") REFERENCES "sections"("id") ON DELETE SET NULL ON UPDATE CASCADE;
