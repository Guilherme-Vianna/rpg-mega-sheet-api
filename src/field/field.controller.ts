import { Controller, Get, Post, Body, Param, Delete, Patch, Query, Put } from '@nestjs/common';
import { FieldService } from './field.service';

@Controller('fields')
export class FieldController {
  constructor(private readonly fieldsService: FieldService) { }

  @Post()
  create(@Body() data: { sheetId: number; name: string; value?: string, x: number, y: number, w: number, h: number, sectionId: number }) {
    return this.fieldsService.create(data);
  }

  @Get()
  findAll(@Query('sheetId') sheetId?: string) {
    return this.fieldsService.findAll(sheetId ? Number(sheetId) : undefined);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fieldsService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: { name?: string; value?: string }) {
    console.log('update', id, data);
    return this.fieldsService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fieldsService.remove(Number(id));
  }
}