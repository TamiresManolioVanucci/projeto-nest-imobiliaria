import { Controller, Post } from '@nestjs/common';
import { CreateImovelUseCase } from '../../application/create-imovel.use-case';

@Controller('imoveis')
export class ImovelController {
  constructor(private readonly CreateImovelUseCase: CreateImovelUseCase) {}

  @Post()
  async create() {}
}
