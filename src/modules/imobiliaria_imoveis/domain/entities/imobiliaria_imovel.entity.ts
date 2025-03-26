import { Imobiliaria } from 'src/modules/imobiliarias/domain/entities/imobiliaria.entity';
import { Imovel } from 'src/modules/imoveis/domain/entities/imovel.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('imobiliarias_imoveis')
export class ImobiliariaImovel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Imobiliaria, (imobiliaria) => imobiliaria.imoveis)
  imobiliaria: Imobiliaria;

  @ManyToOne(() => Imovel, (imovel) => imovel.imobiliarias)
  imovel: Imovel;
}
