/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Param, Post } from '@nestjs/common';
import { VincularImovelUseCase } from '../../application/vincular-imovel.use-case';

@Controller('imobiliarias_imoveis')
export class ImobiliariaImovelController {
  constructor(private readonly vincularImovelUseCase: VincularImovelUseCase) {}

  @Post(':imobiliariaId/imoveis/:imovelId')
  vincularImovel(
    @Param('imobiliariaId') imobiliariaId: string,
    @Param('imovelId') imovelId: string,
  ) {
    return this.vincularImovelUseCase.execute(imobiliariaId, imovelId);
  }
}
