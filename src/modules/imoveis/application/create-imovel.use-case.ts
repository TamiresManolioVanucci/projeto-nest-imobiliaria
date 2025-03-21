import { UseCase } from 'src/shared/interfaces/use-case.interface';
import { CreateOrUpdateDTO } from 'src/shared/util/create-or-update.dto';
import { Injectable } from '@nestjs/common';
import { ImovelRepository } from '../domain/repositories/imovel.repository';
import { Imovel } from '../domain/entities/imovel.entity';

@Injectable()
export class CreateImovelUseCase implements UseCase {
  constructor(private readonly imovelRepository: ImovelRepository) {}

  async execute(id?: string | null, body?: CreateOrUpdateDTO): Promise<Imovel> {
    if (!body) {
      throw new Error('O corpo da requisição é obrigatório.');
    }

    const imovel = new Imovel();
    Object.assign(imovel, body);

    return await this.imovelRepository.create(imovel);
  }
}
