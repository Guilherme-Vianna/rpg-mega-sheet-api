import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SectionsService {
  constructor(private prisma: PrismaService) { }

  async create(data: { name: string, userId: number, sheetId: number }) {
    return this.prisma.sections.create({ data });
  }

  async findAll(sheetId?: number) {
    if (sheetId) {
      return this.prisma.sections.findMany({ where: { sheetId } });
    }
    return this.prisma.sections.findMany();
  }

  async findOne(id: number) {
    return this.prisma.sections.findUnique({ where: { id } });
  }

  async update(id: number, data: { name: string, userId: number, sheetId: number }) {
    return this.prisma.sections.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.sections.delete({ where: { id } });
  }
}