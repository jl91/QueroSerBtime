import 'reflect-metadata';
import { ValidatorInterface } from "./validator.interface";
import { Injectable } from "ts-di";

// @ts-ignore
@Injectable()
export class IsLetterValidator implements ValidatorInterface<string> {

    isValid(value: string): boolean {
        const regex = new RegExp('[a-zA-ZçÇãẽĩõũÃẼĨÕŨáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙ]+');
        return regex.test(value);
    }

}