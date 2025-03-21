/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateImovelUseCase } from '../../application/create-imovel.use-case';
import { CreateImovelDTO } from '../dtos/create-imovel.dto';

@Controller('imoveis')
export class ImovelController {
  constructor(private readonly createImovelUseCase: CreateImovelUseCase) {}

  @Post()
  async create(@Body() createImovelDTO: CreateImovelDTO) {
    const imovelcreated = await this.createImovelUseCase.execute(
      null,
      createImovelDTO,
    );

    return {
      message: 'Imovel criado com sucesso.',
      imovel: {
        id: imovelcreated.id,
        tipo: imovelcreated.tipo,
      },
    };
  }
}
