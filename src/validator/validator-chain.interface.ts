import { ValidatorInterface } from "./validator.interface";

/**
 * interface de validator seguindo principio de segregação de interfaces
 */
export interface ValidatorChainInterface<T> extends ValidatorInterface<T> {

    addValidator(validator: ValidatorInterface<T>): ValidatorChainInterface<T>;

    removeValidator(validator: ValidatorInterface<T>): ValidatorChainInterface<T>;

}