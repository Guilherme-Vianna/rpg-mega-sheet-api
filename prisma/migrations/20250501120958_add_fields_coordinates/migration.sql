/*
  Warnings:

  - Added the required column `h` to the `fields` table without a default value. This is not possible if the table is not empty.
  - Added the required column `w` to the `fields` table without a default value. This is not possible if the table is not empty.
  - Added the required column `x` to the `fields` table without a default value. This is not possible if the table is not empty.
  - Added the required column `y` to the `fields` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "fields" ADD COLUMN     "h" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "w" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "x" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "y" DOUBLE PRECISION NOT NULL;
