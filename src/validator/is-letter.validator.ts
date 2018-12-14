import { ValidatorInterface } from "./validator.interface";

export class IsLetterValidator implements ValidatorInterface<string>{

    isValid(value: string): boolean {
        const regex = new RegExp('[a-zA-ZçÇãẽĩõũÃẼĨÕŨáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙ]+');
        return regex.test(value);
    }

}