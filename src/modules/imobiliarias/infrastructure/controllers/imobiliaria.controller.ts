import { Controller, Post } from '@nestjs/common';
import { CreateImobiliariaUseCase } from '../../application/create-imobiliaria.use-case';

@Controller('imobiliarias')
export class ImobiliariaController {
  constructor(
    private readonly createImobiliariaUseCase: CreateImobiliariaUseCase,
  ) {}

  @Post()
  async create() {}
}
