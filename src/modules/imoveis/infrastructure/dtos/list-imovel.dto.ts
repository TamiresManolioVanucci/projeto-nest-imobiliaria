import { TipoImovel } from '../enums/tipo-imovel';

export class ListImovelDTO {
  constructor(
    readonly id: string,
    readonly tipo: TipoImovel,
  ) {}
}
