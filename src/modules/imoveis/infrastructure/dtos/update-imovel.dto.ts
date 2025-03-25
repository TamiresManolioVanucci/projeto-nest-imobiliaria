import { PartialType } from '@nestjs/mapped-types';
import { CreateImovelDTO } from './create-imovel.dto';

export class UpdateImovelDTO extends PartialType(CreateImovelDTO) {}
