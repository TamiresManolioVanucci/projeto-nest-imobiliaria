import { Imobiliaria } from 'src/modules/imobiliarias/domain/entities/imobiliaria.entity';
import { Imovel } from 'src/modules/imoveis/domain/entities/imovel.entity';
import { ImobiliariaImovel } from '../entities/imobiliaria_imovel.entity';

export abstract class ImobiliariaImovelRepository {
  abstract vincular(
    imobiliaria: Imobiliaria,
    imovel: Imovel,
  ): Promise<ImobiliariaImovel>;
  abstract desvincular(id: string): Promise<void>;
}
