import { UseCase } from 'src/shared/interfaces/use-case.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ImovelRepository } from '../domain/repositories/imovel.repository';

@Injectable()
export class DeleteImovelUseCase implements UseCase {
  constructor(private readonly imovelRepository: ImovelRepository) {}

  async execute(id: string): Promise<any> {
    const imovel = await this.imovelRepository.findById(id);

    if (!imovel) {
      throw new NotFoundException(`Imovel com ID ${id} não encontrado`);
    }

    await this.imovelRepository.delete(id);

    return imovel;
  }
}
