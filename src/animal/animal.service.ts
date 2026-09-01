import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) {}

  create(createAnimalDto: CreateAnimalDto) {
    const animal = this.animalRepository.create(createAnimalDto);
    return this.animalRepository.save(animal);
  }

  findAll() {
    return this.animalRepository.find();
  }

  async findOne(id: number) {
    const animal = await this.animalRepository.findOneBy({ id });

    if (!animal) {
      throw new NotFoundException(`Animal con ID ${id} no encontrado`);
    }

    return animal;
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    const animal = await this.findOne(id);

    Object.assign(animal, updateAnimalDto);

    return this.animalRepository.save(animal);
  }

  async remove(id: number) {
    const animal = await this.findOne(id);

    await this.animalRepository.remove(animal);

    return { message: 'Animal eliminado correctamente' };
  }
}