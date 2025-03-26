import { ImobiliariaImovel } from 'src/modules/imobiliaria_imoveis/domain/entities/imobiliaria_imovel.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('imobiliarias')
export class Imobiliaria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(
    () => ImobiliariaImovel,
    (imobiliariaImovel) => imobiliariaImovel.imobiliaria,
  )
  imoveis: ImobiliariaImovel[];

  @Column({ unique: true })
  email: string;

  @Column()
  cnpj: string;

  @Column()
  endereco: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column({ nullable: true })
  complemento: string;

  @Column()
  telefone: string;

  @Column()
  creci: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
