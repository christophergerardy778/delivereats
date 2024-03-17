export type Primitives = String | string | Number | number | Boolean | boolean | Date;
export declare abstract class ValueObject<T extends Primitives> {
    readonly value: T;
    constructor(value: T);
    private ensureIsDefined;
    toString(): string;
}
