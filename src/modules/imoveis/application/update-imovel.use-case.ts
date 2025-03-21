import { UseCase } from 'src/shared/interfaces/use-case.interface';
import { Injectable } from '@nestjs/common';
import { ImovelRepository } from '../domain/repositories/imovel.repository';
import { UpdateImovelDTO } from '../infrastructure/dtos/update-imovel.dto';

@Injectable()
export class UpdateImovelUseCase implements UseCase {
  constructor(private readonly imovelRepository: ImovelRepository) {}

  async execute(id: string, body: UpdateImovelDTO): Promise<any> {
    if (!id) {
      throw new Error('ID do Imovel é obrigatório.');
    }

    const existingImovel = await this.imovelRepository.findById(id);
    if (!existingImovel) {
      throw new Error('Imovel não encontrado.');
    }

    Object.assign(existingImovel, body);

    return await this.imovelRepository.update(existingImovel);
  }
}
