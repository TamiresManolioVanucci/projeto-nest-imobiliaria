import { InjectRepository } from '@nestjs/typeorm';
import { Imobiliaria } from '../../domain/entities/imobiliaria.entity';
import { ImobiliariaRepository } from '../../domain/repositories/imobiliaria.repository';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImobiliariaTypeOrmRepository implements ImobiliariaRepository {
  constructor(
    @InjectRepository(Imobiliaria)
    private readonly repository: Repository<Imobiliaria>,
  ) {}

  async create(imobiliaria: Imobiliaria): Promise<Imobiliaria> {
    return this.repository.save(imobiliaria);
  }

  async list(): Promise<Imobiliaria[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Imobiliaria | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<Imobiliaria | null> {
    return await this.repository.findOne({
      where: { email },
    });
  }

  async update(imobiliaria: Imobiliaria): Promise<Imobiliaria> {
    return await this.repository.save(imobiliaria);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
