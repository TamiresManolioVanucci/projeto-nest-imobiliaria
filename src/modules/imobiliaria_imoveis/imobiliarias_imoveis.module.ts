import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImobiliariaImovel } from './domain/entities/imobiliaria_imovel.entity';
import { ImobiliariaImovelController } from './infrastructure/controllers/imobiliaria_imovel.controller';
import { VincularImovelUseCase } from './application/vincular-imovel.use-case';
import { ImobiliariaImovelRepository } from './domain/repositories/imobiliaria-imovel.repository';
import { ImobiliariaImovelTypeOrmRepository } from './infrastructure/persistence/imobiliaria-imovel.typeorm.repository';
import { ImobiliariasModule } from '../imobiliarias/imobiliarias.module';
import { ImoveisModule } from '../imoveis/imoveis.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ImobiliariaImovel]),
    ImobiliariasModule,
    ImoveisModule,
  ],
  controllers: [ImobiliariaImovelController],
  providers: [
    {
      provide: ImobiliariaImovelRepository,
      useClass: ImobiliariaImovelTypeOrmRepository,
    },
    VincularImovelUseCase,
  ],
  exports: [ImobiliariaImovelRepository],
})
export class ImobiliariasImoveisModule {}
