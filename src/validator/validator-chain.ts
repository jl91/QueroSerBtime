import { ValidatorChainInterface } from "./validator-chain.interface";
import { ValidatorInterface } from "./validator.interface";


/**
 * Implementando composite pattern para validadores
 */
export class ValidatorChain implements ValidatorChainInterface<string> {

    private validators: Map<string, ValidatorInterface<string>> = new Map<string, ValidatorInterface<string>>();

    addValidator(validator: ValidatorInterface<string>): ValidatorChainInterface<string> {
        // é necessário ignorar pq o compilador tem um bug para essa versão // https://github.com/Microsoft/TypeScript/issues/6373
        // @ts-ignore
        const className = validator.contructor.name;
        if (!this.validators.has(className)) {
            this.validators.set(className, validator)
        }
        return this;
    }

    isValid(value: string): boolean {
        const validators = Array.from(this.validators.values());

        for (let validator of validators) {
            if (!validator.isValid(value)) {
                return false;
            }
        }

        return true;
    }

    removeValidator(validator: ValidatorInterface<string>): ValidatorChainInterface<string> {
        // é necessário ignorar pq o compilador tem um bug para essa versão // https://github.com/Microsoft/TypeScript/issues/6373
        // @ts-ignore
        const className = validator.contructor.name;
        if (!this.validators.has(className)) {
            this.validators.delete(className);
        }
        return this;
    }

}