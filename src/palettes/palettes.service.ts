import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Palettes } from './palettes.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PalettesService {
  constructor(
    @InjectRepository(Palettes)
    private palettesRepository: Repository<Palettes>,
  ) {}

  findAll(): Promise<Palettes[]> {
    return this.palettesRepository.find();
  }
}
