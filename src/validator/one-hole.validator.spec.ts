import { OneHoleValidator } from "./one-hole.validator";
import { ReflectiveInjector } from "ts-di";

describe('IsLetterValidator', () => {
    let oneHoleValidator: OneHoleValidator;

    beforeEach(() => {
        const injector = ReflectiveInjector.resolveAndCreate([
            OneHoleValidator
        ]);

        oneHoleValidator = injector.get(OneHoleValidator);
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
                "expected": false
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
                "expected": false
            },
        ].forEach((item) => {
            const actual = oneHoleValidator.isValid(item.actual);
            expect(actual).toEqual(item.expected);
        });
    });
});