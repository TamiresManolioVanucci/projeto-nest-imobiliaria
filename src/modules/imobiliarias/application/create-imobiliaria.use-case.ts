/* eslint-disable prettier/prettier */
import { UseCase } from 'src/shared/interfaces/use-case.interface';
import { ImobiliariaRepository } from '../domain/repositories/imobiliaria.repository';
import { CreateOrUpdateDTO } from 'src/shared/util/create-or-update.dto';
import { Imobiliaria } from '../domain/entities/imobiliaria.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateImobiliariaUseCase implements UseCase {
  constructor(private readonly imobiliariaRepository: ImobiliariaRepository) {}

  async execute(id?: string | null, body?: CreateOrUpdateDTO): Promise<Imobiliaria> {
    if (!body) {
      throw new Error('O corpo da requisição é obrigatório.');
    }

    const imobiliaria = new Imobiliaria();
    Object.assign(imobiliaria, body);

    return await this.imobiliariaRepository.create(imobiliaria);
  }
}

