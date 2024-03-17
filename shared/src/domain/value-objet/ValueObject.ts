import {InvalidParamError} from '../error/InvalidParamError';

export type Primitives = string | number | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
	// eslint-disable-next-line @typescript-eslint/parameter-properties
	readonly value!: T;

	constructor(value: T) {
		this.value = value;
		this.ensureIsDefined(value);
	}

	public equals(vo: ValueObject<T>) {
		return vo.constructor.name === this.constructor.name && this.value === vo.value;
	}

	public toString(): string {
		return this.value.toString();
	}

	private ensureIsDefined(value: T) {
		if (value === null || value === undefined) {
			throw new InvalidParamError('Value must be defined');
		}
	}
}
