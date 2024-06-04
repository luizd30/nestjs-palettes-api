import { Module } from '@nestjs/common';
import { PalettesController } from './palettes.controller';
import { PalettesService } from './palettes.service';
import { Palettes } from './palettes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Palettes])],
  controllers: [PalettesController],
  providers: [PalettesService],
  exports: [PalettesService, TypeOrmModule],
})
export class PalettesModule {}
