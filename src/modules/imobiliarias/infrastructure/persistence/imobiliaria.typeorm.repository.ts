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

  create(imobiliaria: Imobiliaria): Promise<Imobiliaria> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Imobiliaria | null> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<Imobiliaria | null> {
    throw new Error('Method not implemented.');
  }
  update(id: string, imobiliaria: Imobiliaria): Promise<Imobiliaria> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
