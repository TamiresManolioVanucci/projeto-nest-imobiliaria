import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from 'src/shared/interfaces/use-case.interface';
import { ImobiliariaImovelRepository } from '../domain/repositories/imobiliaria-imovel.repository';

@Injectable()
export class DesvincularImobiliariaImovelUseCase implements UseCase {
  constructor(
    private readonly imobiliariaImovelRepository: ImobiliariaImovelRepository,
  ) {}

  async execute(id: string): Promise<any> {
    const desvincular = await this.imobiliariaImovelRepository.findById(id);

    if (!desvincular) {
      throw new NotFoundException(
        `Imobiliaria ou imovel com ID ${id} não encontrado`,
      );
    }

    await this.imobiliariaImovelRepository.desvincular(id);

    return desvincular;
  }
}
