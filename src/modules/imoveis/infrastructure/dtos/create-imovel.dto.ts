/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEnum, IsNotEmpty } from 'class-validator';
import { CreateOrUpdateDTO } from 'src/shared/util/create-or-update.dto';
import { TipoImovel } from '../enums/tipo-imovel';

export class CreateImovelDTO extends CreateOrUpdateDTO {
  @IsNotEmpty({ message: 'O campo tipo não pode ser vazio' })
  @IsEnum(TipoImovel, {
    message:
      'O campo tipo deve ser um dos valores permitidos: Casa, Apartamento, Terreno, Comercial, Rural',
  })
  tipo: TipoImovel;

  endereco: string;

  numero: string;

  bairro: string;

  @IsNotEmpty({ message: 'O campo cidade não pode ser vazio' })
  cidade: string;

  @IsNotEmpty({ message: 'O campo estado não pode ser vazio' })
  estado: string;

  valor: number;

  @IsNotEmpty({ message: 'O campo tamanho não pode ser vazio' })
  tamanho: string;
}
