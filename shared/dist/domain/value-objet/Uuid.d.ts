import { ValueObject } from './ValueObject';
export declare class Uuid extends ValueObject<string> {
    static random(): Uuid;
    constructor(value: string);
    private ensureIsValidUuid;
}
