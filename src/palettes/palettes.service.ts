import { Injectable } from '@nestjs/common';
import { palettes } from 'src/data';
import { Palettes } from 'src/interfaces/palettes.interface';

@Injectable()
export class PalettesService {
  private readonly palettes: Palettes[] = palettes;

  findAll(): Palettes[] {
    return this.palettes;
  }
}
