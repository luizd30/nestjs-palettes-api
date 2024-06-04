import { Controller, Get } from '@nestjs/common';
import { PalettesService } from './palettes.service';
import { Palettes } from './palettes.entity';
import { Throttle } from '@nestjs/throttler';

@Controller('palettes')
export class PalettesController {
  constructor(private palettesService: PalettesService) {}

  @Get()
  async findAll(): Promise<Palettes[]> {
    return this.palettesService.findAll();
  }
}
