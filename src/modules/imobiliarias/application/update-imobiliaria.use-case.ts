import { UseCase } from 'src/shared/interfaces/use-case.interface';
import { Injectable } from '@nestjs/common';
import { ImobiliariaRepository } from '../domain/repositories/imobiliaria.repository';
import { UpdateImobiliariaDTO } from '../infrastructure/dtos/update-imobiliaria.dto';

@Injectable()
export class UpdateUserUseCase implements UseCase {
  constructor(private readonly imobiliariaRepository: ImobiliariaRepository) {}

  async execute(id: string, body: UpdateImobiliariaDTO): Promise<any> {
    if (!id) {
      throw new Error('ID da Imobiliaria é obrigatório.');
    }

    const existingImobiliaria = await this.imobiliariaRepository.findById(id);
    if (!existingImobiliaria) {
      throw new Error('Imobiliaria não encontrada.');
    }

    Object.assign(existingImobiliaria, body);

    return await this.imobiliariaRepository.update(existingImobiliaria);
  }
}
