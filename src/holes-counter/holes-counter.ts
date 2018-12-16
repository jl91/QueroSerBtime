import 'reflect-metadata';
import { IsLetterValidator } from "../validator/is-letter.validator";
import { OneHoleValidator } from "../validator/one-hole.validator";
import { TwoHolesValidator } from "../validator/two-holes.validator";
import { Injectable } from "ts-di";


// @ts-ignore
@Injectable()
export class HolesCounter {

    private text: string = '';

    /**
     * implementando inversão de controle com dependency injection
     */
    constructor(
        private isLetterValidator: IsLetterValidator,
        private oneHoleValidator: OneHoleValidator,
        private twoHolesValidator: TwoHolesValidator
    ) {
    }

    setText(text: string): HolesCounter {
        this.text = text;
        return this;
    }

    getQuantityOfHoles(): number {
        let quantityNumber = 0;
        const pieces = this.text
            .split('');

        pieces.forEach((piece) => {

            if (!this.isLetterValidator.isValid(piece)) {
                return;
            }

            if (this.oneHoleValidator.isValid(piece)) {
                ++quantityNumber;
                return;
            }

            if (this.twoHolesValidator.isValid(piece)) {
                quantityNumber += 2;
                return;
            }

        });

        return quantityNumber;
    }
}