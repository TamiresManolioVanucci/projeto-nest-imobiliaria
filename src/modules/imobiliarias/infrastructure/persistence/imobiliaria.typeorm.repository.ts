/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { InjectRepository } from '@nestjs/typeorm';
import { Imobiliaria } from '../../domain/entities/imobiliaria.entity';
import { ImobiliariaRepository } from '../../domain/repositories/imobiliaria.repository';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImobiliariaTypeOrmRepository implements ImobiliariaRepository {
  repository: any;
  constructor(
    @InjectRepository(Imobiliaria)
    private readonly imobiliariaRepository: Repository<Imobiliaria>,
  ) {}

  async create(imobiliaria: Imobiliaria): Promise<Imobiliaria> {
    return this.imobiliariaRepository.save(imobiliaria);
  }

  async list(): Promise<Imobiliaria[]> {
    return await this.repository.find();
}

  findById(id: string): Promise<Imobiliaria | null> {
    throw new Error('Method not implemented.');
  }

  async findByEmail(email: string): Promise<Imobiliaria | null> {
    return await this.imobiliariaRepository.findOne({
      where: { email },
    });
  }

  update(id: string, imobiliaria: Imobiliaria): Promise<Imobiliaria> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
