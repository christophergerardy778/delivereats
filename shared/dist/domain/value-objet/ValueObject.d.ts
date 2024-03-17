export type Primitives = string | number | boolean | Date;
export declare abstract class ValueObject<T extends Primitives> {
    readonly value: T;
    protected constructor(value: T);
    equals(vo: ValueObject<T>): boolean;
    toString(): string;
    private ensureIsDefined;
}
