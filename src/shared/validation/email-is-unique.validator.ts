/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, NotFoundException } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ImobiliariaRepository } from 'src/modules/imobiliarias/domain/repositories/imobiliaria.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailIsUniqueValidator implements ValidatorConstraintInterface {
  constructor(private readonly imobiliariaRepository: ImobiliariaRepository) {}

  async validate(value: string): Promise<boolean> {
    try {
      const userExists = await this.imobiliariaRepository.findByEmail(value);

      return !userExists;
    } catch (error) {
      if (error instanceof NotFoundException) {
        return true;
      }

      throw error;
    }
  }
}

export const EmailIsUnique = (validationOptions: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: EmailIsUniqueValidator,
    });
  };
};
