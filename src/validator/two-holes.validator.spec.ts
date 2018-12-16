import { TwoHolesValidator } from "./two-holes.validator";
import { ReflectiveInjector } from "ts-di";

describe('TwoHolesValidator', () => {
    let twoHolesValidator: TwoHolesValidator;

    beforeEach(() => {
        const injector = ReflectiveInjector.resolveAndCreate([
            TwoHolesValidator
        ]);

        twoHolesValidator = injector.get(TwoHolesValidator);
    });


    it('isValid', () => {
        [
            {
                "actual": "B",
                "expected": true
            },
            {
                "actual": "8",
                "expected": false
            },
            {
                "actual": "b",
                "expected": false
            },
            {
                "actual": "d",
                "expected": false
            },
            {
                "actual": "e",
                "expected": false
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
                "expected": false
            },
        ].forEach((item) => {
            const actual = twoHolesValidator.isValid(item.actual);
            expect(actual).toEqual(item.expected);
        });
    });
});