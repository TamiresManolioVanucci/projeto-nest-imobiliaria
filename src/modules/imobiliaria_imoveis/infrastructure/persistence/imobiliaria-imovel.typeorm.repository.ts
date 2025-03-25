import { Injectable } from '@nestjs/common';
import { ImobiliariaImovelRepository } from '../../domain/repositories/imobiliaria-imovel.repository';
import { ImobiliariaImovel } from '../../domain/entities/imobiliaria_imovel.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Imobiliaria } from 'src/modules/imobiliarias/domain/entities/imobiliaria.entity';
import { Imovel } from 'src/modules/imoveis/domain/entities/imovel.entity';

@Injectable()
export class ImobiliariaImovelTypeOrmRepository
  implements ImobiliariaImovelRepository
{
  constructor(
    @InjectRepository(ImobiliariaImovel)
    private readonly repository: Repository<ImobiliariaImovel>,
  ) {}
  async vincular(
    imobiliaria: Imobiliaria,
    imovel: Imovel,
  ): Promise<ImobiliariaImovel> {
    return await this.repository.save({ imobiliaria, imovel });
  }
  desvincular(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
