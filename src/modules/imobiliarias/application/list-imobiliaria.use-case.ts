/* eslint-disable prettier/prettier */
import { UseCase } from "src/shared/interfaces/use-case.interface";
import { Injectable } from "@nestjs/common";
import { ImobiliariaRepository } from "../domain/repositories/imobiliaria.repository";

@Injectable()
export class ListImobiliariaUseCase implements UseCase {
    constructor(
        private readonly imobiliariaRepository: ImobiliariaRepository
    ) { }

    async execute(): Promise<any> {
        return await this.imobiliariaRepository.list();
    }
}