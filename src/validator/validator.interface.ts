/**
 * interface de validator seguindo principio de segregação de interfaces
 */
export interface ValidatorInterface<T> {
    isValid(value: T): boolean;
}