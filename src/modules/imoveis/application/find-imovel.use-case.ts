import { UseCase } from 'src/shared/interfaces/use-case.interface';
import { Injectable } from '@nestjs/common';
import { ImovelRepository } from '../domain/repositories/imovel.repository';

@Injectable()
export class FindImovelUseCase implements UseCase {
  constructor(private readonly imovelRepository: ImovelRepository) {}

  async execute(id: string): Promise<any> {
    return await this.imovelRepository.findById(id);
  }
}
