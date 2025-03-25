/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateImovelUseCase } from '../../application/create-imovel.use-case';
import { CreateImovelDTO } from '../dtos/create-imovel.dto';
import { TipoImovel } from '../enums/tipo-imovel';
import { ListImovelDTO } from '../dtos/list-imovel.dto';
import { ListImovelUseCase } from '../../application/list-imovel.use-case';
import { FindImovelUseCase } from '../../application/find-imovel.use-case';
import { UpdateImovelDTO } from '../dtos/update-imovel.dto';
import { UpdateImovelUseCase } from '../../application/update-imovel.use-case';
import { DeleteImovelUseCase } from '../../application/delete-imovel.use-case';

@Controller('imoveis')
export class ImovelController {
  constructor(
    private readonly createImovelUseCase: CreateImovelUseCase,
    private readonly listImovelUseCase: ListImovelUseCase,
    private readonly findImovelUseCase: FindImovelUseCase,
    private readonly updateImovelUseCase: UpdateImovelUseCase,
    private readonly deleteImovelUseCase: DeleteImovelUseCase,
  ) {}

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

  @Get()
  async list() {
    const imovelList = await this.listImovelUseCase.execute();

    return {
      message: 'Imovel listado com sucesso.',

      imoveis: imovelList.map(
        (imovel: { TipoImovel: TipoImovel; id: string; tipo: TipoImovel }) =>
          new ListImovelDTO(imovel.id, imovel.tipo),
      ),
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const imovelFound = await this.findImovelUseCase.execute(id);

    return {
      message: 'Imovel encontrado.',
      imovel: new ListImovelDTO(imovelFound.id, imovelFound.tipo),
    };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateImovelDTO) {
    const imovelUpdated = await this.updateImovelUseCase.execute(id, body);

    return {
      message: 'Imovel atualizado',
      user: new ListImovelDTO(imovelUpdated.id, imovelUpdated.tipo),
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const imovelDeleted = await this.deleteImovelUseCase.execute(id);

    return {
      message: 'Imovel deletado',
      imovel: new ListImovelDTO(imovelDeleted.id, imovelDeleted.tipo),
    };
  }
}
