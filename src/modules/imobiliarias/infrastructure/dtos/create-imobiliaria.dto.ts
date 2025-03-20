/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { CreateOrUpdateDTO } from 'src/shared/util/create-or-update.dto';
import { EmailIsUnique } from 'src/shared/validation/email-is-unique.validator';

export class CreateImobiliariaDTO extends CreateOrUpdateDTO {
  @IsNotEmpty({ message: 'O campo name não pode ser vazio' })
  name: string;

  @IsEmail(undefined, { message: 'O email informado é invalido' })
  @EmailIsUnique({ message: 'Já existe uma imobiliaria com esse e-mail' })
  email: string;

  @IsString({ message: 'O CNPJ deve ser um número válido.' })
  @Matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$|^\d{14}$/, {
    message:
      'O CNPJ deve estar no formato XX.XXX.XXX/XXXX-XX ou conter apenas 14 dígitos.',
  })
  cnpj: string;

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

  @IsString({ message: 'O telefone deve ser um número válido.' })
  @MinLength(10, { message: 'O telefone deve ter no mínimo 10 dígitos.' })
  @Matches(/^\(?\d{2}\)?[\s-]?9?\d{4}-?\d{4}$/, {
    message: 'O telefone deve estar no formato (XX) 9XXXX-XXXX ou XXXXXXXXXX.',
  })
  telefone: string;

  @IsString({ message: 'O CRECI deve ser um número válido.' })
  @MinLength(6, { message: 'O CRECI deve ter no mínimo 6 caracteres.' })
  @Matches(/^[A-Za-z]{2}\d{6}$/, {
    message: 'O CRECI deve estar no formato correto. Exemplo: SP123456.',
  })
  creci: string;
}
