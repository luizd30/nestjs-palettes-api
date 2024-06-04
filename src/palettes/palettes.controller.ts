import { Controller, Get } from '@nestjs/common';
import { PalettesService } from './palettes.service';
import { Palettes } from 'src/interfaces/palettes.interface';

@Controller('palettes')
export class PalettesController {
  constructor(private palettesService: PalettesService) {}

  @Get()
  async findAll(): Promise<Palettes[]> {
    return this.palettesService.findAll();
  }
}
