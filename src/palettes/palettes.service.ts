import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findById(id: number): Promise<Palettes> {
    const color = await this.palettesRepository.findOne({ where: { id } });
    if (!color) {
      throw new NotFoundException(`Color with id ${id} not found`);
    }
    return color;
  }
}
