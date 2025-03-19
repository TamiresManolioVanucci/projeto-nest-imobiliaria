import { Imobiliaria } from '../entities/imobiliaria.entity';

export abstract class ImobiliariaRepository {
  abstract create(imobiliaria: Imobiliaria): Promise<Imobiliaria>;
  abstract findById(id: string): Promise<Imobiliaria | null>;
  abstract findByEmail(email: string): Promise<Imobiliaria | null>;
  abstract update(id: string, imobiliaria: Imobiliaria): Promise<Imobiliaria>;
  abstract delete(id: string): Promise<void>;
}
