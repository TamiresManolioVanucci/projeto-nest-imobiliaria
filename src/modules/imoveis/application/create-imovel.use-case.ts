/* eslint-disable @typescript-eslint/no-unused-vars */
import { UseCase } from 'src/shared/interfaces/use-case.interface';
import { CreateOrUpdateDTO } from 'src/shared/util/create-or-update.dto';
import { ImovelRepository } from '../domain/repositories/imovel.repository';

export class CreateImovelUseCase implements UseCase {
  constructor(private readonly imobiliariaRepository: ImovelRepository) {}

  execute(id?: string | null, body?: CreateOrUpdateDTO): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
