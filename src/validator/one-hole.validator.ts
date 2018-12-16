import 'reflect-metadata';
import { ValidatorInterface } from "./validator.interface";
import { Injectable } from "ts-di";

// @ts-ignore
@Injectable()
export class OneHoleValidator implements ValidatorInterface<string> {
    private readonly ONE_HOLE_LETTERS: Array<string> = [
        'a', 'b', 'd', 'e', 'g', 'o', 'p', 'q', 'A', 'D', 'O', 'P', 'Q', 'R'
    ];

    isValid(value: string): boolean {

        const foundLetter = this.ONE_HOLE_LETTERS
            .find((actual: string) => {
                return actual === value;
            });

        return foundLetter !== undefined;
    }
}