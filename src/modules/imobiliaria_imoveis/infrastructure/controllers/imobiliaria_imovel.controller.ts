/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Controller, Delete, Param, Post } from '@nestjs/common';
import { VincularImobiliariaImovelUseCase } from '../../application/vincular-imobiliaria-imovel.use-case';
import { ListImobiliariaImovelDTO } from '../dtos/list-imobiliaria-imovel.dto';
import { DesvincularImobiliariaImovelUseCase } from '../../application/desvincular-imobiliaria-imovel.use-case';

@Controller('imobiliarias_imoveis')
export class ImobiliariaImovelController {
  constructor(
    private readonly vincularImobiliariaImovelUseCase: VincularImobiliariaImovelUseCase,
    private readonly desvincularImobiliariaImovelUseCase: DesvincularImobiliariaImovelUseCase,
  ) {}

  @Post(':imobiliariaId/imoveis/:imovelId')
  async vincularImovel(
    @Param('imobiliariaId') imobiliariaId: string,
    @Param('imovelId') imovelId: string,
  ) {
    const vincular = await this.vincularImobiliariaImovelUseCase.execute(
      imobiliariaId,
      imovelId,
    );
    return {
      message: 'Imovel vinculado',
      imobiliariaImovel: new ListImobiliariaImovelDTO(vincular.id),
    };
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const desvincular =
      await this.desvincularImobiliariaImovelUseCase.execute(id);
    return {
      message: 'Imovel desvinculado',
      imobiliariaImovel: new ListImobiliariaImovelDTO(desvincular.id),
    };
  }
}
