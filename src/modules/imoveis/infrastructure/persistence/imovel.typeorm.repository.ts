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
  findById(id: string): Promise<Imovel | null> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<Imovel | null> {
    throw new Error('Method not implemented.');
  }
  update(id: string, imovel: Imovel): Promise<Imovel> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
