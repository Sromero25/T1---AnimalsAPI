import { IsNumber, IsString, Min } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  nombre!: string;

  @IsString()
  especie!: string;

  @IsString()
  raza!: string;

  @IsNumber()
  @Min(0)
  edad!: number;

  @IsNumber()
  @Min(0)
  peso!: number;
}