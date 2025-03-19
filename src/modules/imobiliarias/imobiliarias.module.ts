/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Imobiliaria } from './domain/entities/imobiliaria.entity';
import { ImobiliariaTypeOrmRepository } from './infrastructure/persistence/imobiliaria.typeorm.repository';
import { ImobiliariaRepository } from './domain/repositories/imobiliaria.repository';
import { ImobiliariaController } from './infrastructure/controllers/imobiliaria.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Imobiliaria])],
  controllers: [ImobiliariaController],
  providers: [
    {
      provide: ImobiliariaRepository,
      useClass: ImobiliariaTypeOrmRepository,
    },
  ],
  exports: [ImobiliariaRepository],
})
export class ImobiliariasModule {}
