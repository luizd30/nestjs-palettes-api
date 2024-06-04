import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PalettesController } from './palettes/palettes.controller';
import { PalettesService } from './palettes/palettes.service';
import { PalettesModule } from './palettes/palettes.module';

@Module({
  imports: [PalettesModule],
  controllers: [AppController, PalettesController],
  providers: [AppService, PalettesService],
})
export class AppModule {}
