import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SectionsService } from './sections.service';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) { }

  @Post()
  create(@Body() createSectionDto: { name: string, userId: number, sheetId: number }) {
    return this.sectionsService.create(createSectionDto);
  }

  @Get()
  findAll(@Query('sheetId') sheetId?: string) {
    return this.sectionsService.findAll(sheetId ? Number(sheetId) : undefined);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSectionDto: { name: string, userId: number, sheetId: number }) {
    return this.sectionsService.update(+id, updateSectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sectionsService.remove(+id);
  }
}
