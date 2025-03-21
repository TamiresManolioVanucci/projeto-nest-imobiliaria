import { Body, Controller, Post } from '@nestjs/common';
import { CreateImobiliariaUseCase } from '../../application/create-imobiliaria.use-case';
import { CreateImobiliariaDTO } from '../dtos/create-imobiliaria.dto';

@Controller('imobiliarias')
export class ImobiliariaController {
  constructor(
    private readonly createImobiliariaUseCase: CreateImobiliariaUseCase,
  ) {}

  @Post()
  async create(@Body() createImobiliariaDTO: CreateImobiliariaDTO) {
    const imobiliariaCriada = await this.createImobiliariaUseCase.execute(
      null,
      createImobiliariaDTO,
    );

    return {
      message: 'Imobiliária criada com sucesso.',
      imobiliaria: {
        id: imobiliariaCriada.id,
        name: imobiliariaCriada.name,
        email: imobiliariaCriada.email,
      },
    };
  }
}
