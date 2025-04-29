import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { SheetService } from './sheet.service';

@Controller('sheets')
export class SheetController {
  constructor(private readonly sheetsService: SheetService) { }

  @Post()
  create(@Body() data: { name: string; userId: number }) {
    return this.sheetsService.create(data);
  }

  @Get()
  findAll() {
    return this.sheetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sheetsService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: { name?: string }) {
    return this.sheetsService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sheetsService.remove(Number(id));
  }
}