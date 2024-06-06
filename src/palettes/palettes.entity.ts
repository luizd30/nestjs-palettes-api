import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Palettes {
  @ApiProperty({ example: 1, description: 'O ID da paleta.' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Pastel Colors', description: 'O nome da paleta.' })
  @Column()
  name: string;

  @ApiProperty({
    example: '#FF5733, #33FF57, #3357FF',
    description: 'As cores da paleta.',
  })
  @Column('text', { array: true })
  colors: string[];

  @ApiProperty({
    example: 'warm, neon, summer',
    description: 'As cores da paleta.',
  })
  @Column('text', { array: true })
  tags: string[];
}
