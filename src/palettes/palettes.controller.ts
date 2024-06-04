import { Controller, Get, Param } from '@nestjs/common';
import { PalettesService } from './palettes.service';
import { Palettes } from './palettes.entity';

@Controller('palettes')
export class PalettesController {
  constructor(private palettesService: PalettesService) {}

  @Get()
  async findAll(): Promise<Palettes[]> {
    return this.palettesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Palettes[]> {
    return this.palettesService.findById(id);
  }
}
