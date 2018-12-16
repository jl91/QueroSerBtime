import 'reflect-metadata';
import { ValidatorInterface } from "./validator.interface";
import { Injectable } from "ts-di";

// @ts-ignore
@Injectable()
export class TwoHolesValidator implements ValidatorInterface<string> {

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