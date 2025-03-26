import { Injectable } from '@nestjs/common';
import { ImobiliariaImovelRepository } from '../domain/repositories/imobiliaria-imovel.repository';
import { ImobiliariaRepository } from 'src/modules/imobiliarias/domain/repositories/imobiliaria.repository';
import { ImovelRepository } from 'src/modules/imoveis/domain/repositories/imovel.repository';
import { UseCase } from 'src/shared/interfaces/use-case.interface';
import { ImobiliariaImovel } from '../domain/entities/imobiliaria_imovel.entity';

@Injectable()
export class VincularImobiliariaImovelUseCase implements UseCase {
  constructor(
    private readonly imobiliariaImovelRepository: ImobiliariaImovelRepository,
    private readonly imobiliariaRepository: ImobiliariaRepository,
    private readonly imovelRepository: ImovelRepository,
  ) {}

  async execute(
    imobiliariaId: string,
    imovelId: string,
  ): Promise<ImobiliariaImovel> {
    const imobiliaria =
      await this.imobiliariaRepository.findById(imobiliariaId);

    const imovel = await this.imovelRepository.findById(imovelId);

    if (!imobiliaria || !imovel) {
      throw new Error('Imobiliária ou imóvel não encontrado.');
    }

    return await this.imobiliariaImovelRepository.vincular(imobiliaria, imovel);
  }
}
