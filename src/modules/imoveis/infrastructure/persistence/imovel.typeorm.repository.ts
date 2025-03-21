/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { ImovelRepository } from '../../domain/repositories/imovel.repository';
import { Imovel } from '../../domain/entities/imovel.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ImovelTypeOrmRepository implements ImovelRepository {
  constructor(
    @InjectRepository(Imovel)
    private readonly repository: Repository<Imovel>,
  ) {}

  async create(imovel: Imovel): Promise<Imovel> {
    return this.repository.save(imovel);
  }
  async list(): Promise<Imovel[]> {
    return await this.repository.find();
  }
  async findById(id: string): Promise<Imovel | null> {
    return await this.repository.findOne({ where: { id } });
  }
  async update(imovel: Imovel): Promise<Imovel> {
    return await this.repository.save(imovel);
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
