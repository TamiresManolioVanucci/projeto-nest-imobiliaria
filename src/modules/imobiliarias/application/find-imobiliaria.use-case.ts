import { UseCase } from 'src/shared/interfaces/use-case.interface';
import { Injectable } from '@nestjs/common';
import { ImobiliariaRepository } from '../domain/repositories/imobiliaria.repository';

@Injectable()
export class FindImobiliariaUseCase implements UseCase {
  constructor(private readonly imobiliariaRepository: ImobiliariaRepository) {}

  async execute(id: string): Promise<any> {
    return await this.imobiliariaRepository.findById(id);
  }
}
