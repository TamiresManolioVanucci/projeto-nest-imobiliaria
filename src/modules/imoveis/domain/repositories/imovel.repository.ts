import { Imovel } from '../entities/imovel.entity';

export abstract class ImovelRepository {
  abstract create(imovel: Imovel): Promise<Imovel>;
  abstract findById(id: string): Promise<Imovel | null>;
  abstract findByEmail(email: string): Promise<Imovel | null>;
  abstract update(id: string, imovel: Imovel): Promise<Imovel>;
  abstract delete(id: string): Promise<void>;
}
