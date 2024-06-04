import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Palettes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text', { array: true })
  colors: string[];
}
