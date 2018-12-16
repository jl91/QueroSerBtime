import 'reflect-metadata';
import { ValidatorInterface } from "./validator.interface";
import { Injectable } from "ts-di";

// @ts-ignore
@Injectable()
export class TwoHolesValidator implements ValidatorInterface<string> {

    // Parece meio estranho criar um array para apenas uma letra mas no caso do enunciado tive alguns problemas.
    // primeiro o enunciado define a regra de Holes somente para letras e não números.
    // Pelo que eu pude entender, seguindo essa regra  apenas a letra "b" maiúscula contém 2 buracos,
    // claro que o 8 poderia conter também, porém não é letra.
    private readonly TWO_HOLES_LETTERS: Array<string> = [
        'B'
    ];

    isValid(value: string): boolean {

        const foundLetter = this.TWO_HOLES_LETTERS
            .find((actual: string) => {
                return actual === value;
            });

        return foundLetter !== undefined;
    }

}