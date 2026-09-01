import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  especie!: string;

  @Column()
  raza!: string;

  @Column()
  edad!: number;

  @Column('decimal')
  peso!: number;
}