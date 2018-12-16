import { ReflectiveInjector } from "ts-di";
import { ValidatorChain } from "./validator-chain";
import { IsLetterValidator } from "./is-letter.validator";

describe('ValidatorChain', () => {
    let validatorChain: ValidatorChain;

    const injector = ReflectiveInjector.resolveAndCreate([
        IsLetterValidator,
        ValidatorChain
    ]);

    beforeEach(() => {
        validatorChain = injector.get(ValidatorChain);

    });


    it('should test addValidator method', () => {
        const actual = validatorChain.addValidator(injector.get(IsLetterValidator));
        expect(actual).toBe(validatorChain);
    });

    it('should test RemoveValidator method', () => {
        const actual = validatorChain.removeValidator(injector.get(IsLetterValidator));
        expect(actual).toBe(validatorChain);
    });

    it('should test isValid with dataProviers', () => {

        validatorChain.addValidator(injector.get(IsLetterValidator));

        [
            {
                "actual": "B",
                "expected": true
            },
            {
                "actual": "8",
                "expected": false
            },
        ].forEach((item) => {
            const actual = validatorChain.isValid(item.actual);
            expect(actual).toEqual(item.expected);
        });
    });
});