import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SheetService {
  constructor(private prisma: PrismaService) { }

  async create(data: { name: string; userId: number }) {
    return this.prisma.sheets.create({ data });
  }

  async findAll() {
    return this.prisma.sheets.findMany();
  }

  async findOne(id: number) {
    return this.prisma.sheets.findUnique({ where: { id }, include: { Fields: true } });
  }

  async update(id: number, data: { name?: string }) {
    return this.prisma.sheets.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.sheets.delete({ where: { id } });
  }
}