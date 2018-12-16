import { HolesCounter } from './src/holes-counter/holes-counter'
import 'reflect-metadata';
import { ReflectiveInjector } from 'ts-di';
import { IsLetterValidator } from "./src/validator/is-letter.validator";
import { OneHoleValidator } from "./src/validator/one-hole.validator";
import { TwoHolesValidator } from "./src/validator/two-holes.validator";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";


const injector = ReflectiveInjector.resolveAndCreate([
    HolesCounter,
    IsLetterValidator,
    OneHoleValidator,
    TwoHolesValidator
]);

const holesCounter = injector.get(HolesCounter);
const result = holesCounter.setText(text).getQuantityOfHoles();

console.log(`O texto Abaixo tem : ${result} buracos`);
console.log(text);