import { Module } from '@nestjs/common';
import { Imovel } from './domain/entities/imovel.entity';
import { ImovelController } from './infrastructure/controllers/imovel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImovelRepository } from './domain/repositories/imovel.repository';
import { ImovelTypeOrmRepository } from './infrastructure/persistence/imovel.typeorm.repository';
import { CreateImovelUseCase } from './application/create-imovel.use-case';
import { ListImovelUseCase } from './application/list-imovel.use-case';
import { FindImovelUseCase } from './application/find-imovel.use-case';
import { UpdateImovelUseCase } from './application/update-imovel.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Imovel])],
  controllers: [ImovelController],
  providers: [
    {
      provide: ImovelRepository,
      useClass: ImovelTypeOrmRepository,
    },
    CreateImovelUseCase,
    ListImovelUseCase,
    FindImovelUseCase,
    UpdateImovelUseCase,
  ],
  exports: [ImovelRepository],
})
export class ImoveisModule {}
