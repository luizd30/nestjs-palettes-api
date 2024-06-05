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

  async findAll(): Promise<Palettes[]> {
    return this.palettesRepository.find();
  }

  async findById(id: number): Promise<Palettes[]> {
    return this.palettesRepository.find({ where: { id } });
  }
}
