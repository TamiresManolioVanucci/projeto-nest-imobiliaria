/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateImobiliariaUseCase } from '../../application/create-imobiliaria.use-case';
import { CreateImobiliariaDTO } from '../dtos/create-imobiliaria.dto';
import { ListImobiliariaUseCase } from '../../application/list-imobiliaria.use-case';
import { ListImobiliariaDTO } from '../dtos/list-imobiliaria.dto';
import { FindImobiliariaUseCase } from '../../application/find-imobiliaria.use-case';

@Controller('imobiliarias')
export class ImobiliariaController {
  constructor(
    private readonly createImobiliariaUseCase: CreateImobiliariaUseCase,
    private readonly listImobiliariaUseCase: ListImobiliariaUseCase,
    private readonly findImobiliariaUseCase: FindImobiliariaUseCase,
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

  @Get()
  async list() {
    const imobiliariaList = await this.listImobiliariaUseCase.execute();

    return {
      message: 'Imobiliária listada com sucesso.',

      imobiliarias: imobiliariaList.map(
        (imobiliaria: { id: string; name: string }) =>
          new ListImobiliariaDTO(imobiliaria.id, imobiliaria.name),
      ),
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const imobiliariaFound = await this.findImobiliariaUseCase.execute(id);

    return {
      message: 'Imobiliaria encontrado.',
      imobiliaria: new ListImobiliariaDTO(
        imobiliariaFound.id,
        imobiliariaFound.name,
      ),
    };
  }
}
