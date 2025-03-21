import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Imobiliaria } from './domain/entities/imobiliaria.entity';
import { ImobiliariaTypeOrmRepository } from './infrastructure/persistence/imobiliaria.typeorm.repository';
import { ImobiliariaRepository } from './domain/repositories/imobiliaria.repository';
import { ImobiliariaController } from './infrastructure/controllers/imobiliaria.controller';
import { CreateImobiliariaUseCase } from './application/create-imobiliaria.use-case';
import { EmailIsUniqueValidator } from 'src/shared/validation/email-is-unique.validator';
import { ListImobiliariaUseCase } from './application/list-imobiliaria.use-case';
import { FindImobiliariaUseCase } from './application/find-imobiliaria.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Imobiliaria])],
  controllers: [ImobiliariaController],
  providers: [
    {
      provide: ImobiliariaRepository,
      useClass: ImobiliariaTypeOrmRepository,
    },
    EmailIsUniqueValidator,
    CreateImobiliariaUseCase,
    ListImobiliariaUseCase,
    FindImobiliariaUseCase,
  ],
  exports: [ImobiliariaRepository, EmailIsUniqueValidator],
})
export class ImobiliariasModule {}
