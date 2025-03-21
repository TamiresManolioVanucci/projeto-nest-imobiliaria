/* eslint-disable @typescript-eslint/no-unsafe-call */
import { CreateImobiliariaDTO } from './create-imobiliaria.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateImobiliariaDTO extends PartialType(CreateImobiliariaDTO) {}
