/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumber, Min } from 'class-validator';
import { CreateOrUpdateDTO } from 'src/shared/util/create-or-update.dto';

export class CreateImovelDTO extends CreateOrUpdateDTO {
  @IsNotEmpty({ message: 'O campo tipo não pode ser vazio' })
  tipo: string;

  @IsNotEmpty({ message: 'O campo endereço não pode ser vazio' })
  endereco: string;

  @IsNotEmpty({ message: 'O campo número não pode ser vazio' })
  numero: string;

  @IsNotEmpty({ message: 'O campo bairro não pode ser vazio' })
  bairro: string;

  @IsNotEmpty({ message: 'O campo cidade não pode ser vazio' })
  cidade: string;

  @IsNotEmpty({ message: 'O campo estado não pode ser vazio' })
  estado: string;

  @IsNumber({}, { message: 'O valor precisa ser um número válido' })
  @Min(0, { message: 'O valor não pode ser negativo' })
  valor: number;

  @IsNotEmpty({ message: 'O campo tamanho não pode ser vazio' })
  tamanho: string;

  @IsNumber({}, { message: 'O tamanho do lote precisa ser um número válido' })
  tamanhoLote: number;
}
