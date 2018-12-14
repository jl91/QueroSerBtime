export interface ValidatorInterface<T> {
    isValid(value: T): boolean;
}