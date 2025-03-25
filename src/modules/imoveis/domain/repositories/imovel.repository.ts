import { Imovel } from '../entities/imovel.entity';

export abstract class ImovelRepository {
  abstract create(imovel: Imovel): Promise<Imovel>;
  abstract list(): Promise<Imovel[]>;
  abstract findById(id: string): Promise<Imovel | null>;
  abstract update(imovel: Imovel): Promise<Imovel>;
  abstract delete(id: string): Promise<void>;
}
