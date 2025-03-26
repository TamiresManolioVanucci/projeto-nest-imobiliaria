import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TipoImovel } from '../../infrastructure/enums/tipo-imovel';
import { ImobiliariaImovel } from 'src/modules/imobiliaria_imoveis/domain/entities/imobiliaria_imovel.entity';

@Entity('imoveis')
export class Imovel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(
    () => ImobiliariaImovel,
    (imobiliariaImovel) => imobiliariaImovel.imovel,
  )
  imobiliarias: ImobiliariaImovel[];

  @Column({
    type: 'enum',
    enum: TipoImovel,
  })
  tipo: TipoImovel;

  @Column({ nullable: true })
  endereco: string;

  @Column({ nullable: true })
  numero: number;

  @Column({ nullable: true })
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column({ nullable: true })
  complemento: string;

  @Column({ nullable: true })
  valor: number;

  @Column()
  tamanho: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
