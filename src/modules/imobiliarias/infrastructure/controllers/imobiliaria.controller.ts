/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateImobiliariaUseCase } from '../../application/create-imobiliaria.use-case';
import { CreateImobiliariaDTO } from '../dtos/create-imobiliaria.dto';
import { ListImobiliariaUseCase } from '../../application/list-imobiliaria.use-case';
import { ListImobiliariaDTO } from '../dtos/list-imobiliaria.dto';
import { FindImobiliariaUseCase } from '../../application/find-imobiliaria.use-case';
import { UpdateImobiliariaDTO } from '../dtos/update-imobiliaria.dto';
import { UpdateUserUseCase } from '../../application/update-imobiliaria.use-case';

@Controller('imobiliarias')
export class ImobiliariaController {
  constructor(
    private readonly createImobiliariaUseCase: CreateImobiliariaUseCase,
    private readonly listImobiliariaUseCase: ListImobiliariaUseCase,
    private readonly findImobiliariaUseCase: FindImobiliariaUseCase,
    private readonly updateImobiliariaUseCase: UpdateUserUseCase,
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

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateImobiliariaDTO) {
    const imobiliariaUpdated = await this.updateImobiliariaUseCase.execute(
      id,
      body,
    );

    return {
      message: 'Imobiliaria atualizada',
      user: new ListImobiliariaDTO(
        imobiliariaUpdated.id,
        imobiliariaUpdated.name,
      ),
    };
  }
}
