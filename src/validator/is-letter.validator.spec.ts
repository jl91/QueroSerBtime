import { IsLetterValidator } from "./is-letter.validator";
import { ReflectiveInjector } from "ts-di";

describe('IsLetterValidator', () => {
    let isLetterValidator: IsLetterValidator;

    beforeEach(() => {
        const injector = ReflectiveInjector.resolveAndCreate([
            IsLetterValidator
        ]);

        isLetterValidator = injector.get(IsLetterValidator);
    });

    it('isValid', () => {
        [
            {
                "actual": "a",
                "expected": true
            },
            {
                "actual": "b",
                "expected": true
            },
            {
                "actual": "d",
                "expected": true
            },
            {
                "actual": "e",
                "expected": true
            },
            {
                "actual": "8",
                "expected": false
            },
            {
                "actual": "B",
                "expected": true
            },
            {
                "actual": "~",
                "expected": false
            },
            {
                "actual": ";",
                "expected": false
            },
            {
                "actual": "ç",
                "expected": true
            },
        ].forEach((item) => {
            const actual = isLetterValidator.isValid(item.actual);
            expect(actual).toEqual(item.expected);
        });
    });

});