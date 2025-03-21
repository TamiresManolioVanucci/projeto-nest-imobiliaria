import { UseCase } from 'src/shared/interfaces/use-case.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ImobiliariaRepository } from '../domain/repositories/imobiliaria.repository';

@Injectable()
export class DeleteImobiliariaUseCase implements UseCase {
  constructor(private readonly imobiliariaRepository: ImobiliariaRepository) {}

  async execute(id: string): Promise<any> {
    const imobiliaria = await this.imobiliariaRepository.findById(id);

    if (!imobiliaria) {
      throw new NotFoundException(`Imobiliaria com ID ${id} não encontrado`);
    }

    await this.imobiliariaRepository.delete(id);

    return imobiliaria;
  }
}
