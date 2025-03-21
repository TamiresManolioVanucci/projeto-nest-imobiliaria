/* eslint-disable @typescript-eslint/no-unsafe-call */
import { UseCase } from 'src/shared/interfaces/use-case.interface';
import { Injectable } from '@nestjs/common';
import { ImovelRepository } from '../domain/repositories/imovel.repository';

@Injectable()
export class ListImovelUseCase implements UseCase {
  constructor(private readonly imovelRepository: ImovelRepository) {}

  async execute(): Promise<any> {
    return await this.imovelRepository.list();
  }
}
