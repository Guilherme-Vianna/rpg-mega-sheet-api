import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FieldService {
  constructor(private prisma: PrismaService) { }

  async create(data: { sheetId: number; name: string; value?: string }) {
    return this.prisma.fields.create({ data });
  }

  async findAll(sheetId?: number) {
    if (sheetId) {
      return this.prisma.fields.findMany({ where: { sheetId } });
    }
    return this.prisma.fields.findMany();
  }

  async findOne(id: number) {
    return this.prisma.fields.findUnique({ where: { id } });
  }

  async update(id: number, data: { name?: string; value?: string }) {
    return this.prisma.fields.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.fields.delete({ where: { id } });
  }
}