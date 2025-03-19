import { UseCase } from 'src/shared/interfaces/use-case.interface';
import { ImobiliariaRepository } from '../domain/repositories/imobiliaria.repository';
import { CreateOrUpdateDTO } from 'src/shared/util/create-or-update.dto';

export class CreateImobiliariaUseCase implements UseCase {
  constructor(private readonly imobiliariaRepository: ImobiliariaRepository) {}

  execute(id?: string | null, body?: CreateOrUpdateDTO): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
