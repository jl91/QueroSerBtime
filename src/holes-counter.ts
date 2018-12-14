import { IsLetterValidator } from "./validator/is-letter.validator";
import { OneHoleValidator } from "./validator/one-hole.validator";
import { TwoHolesValidator } from "./validator/two-holes.validator";

export class HolesCounter {

    private isLetterValidator: IsLetterValidator = new IsLetterValidator();
    private oneHoleValidator: OneHoleValidator = new OneHoleValidator();
    private twoHolesValidator: TwoHolesValidator = new TwoHolesValidator();
    private text: string = '';

    constructor() {

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