import {ValueObject} from './ValueObject';
import validate from 'uuid-validate';
import {v4 as uuid} from 'uuid';
import {InvalidParamError} from '../error/InvalidParamError';

export class Uuid extends ValueObject<string> {
	public static random(): Uuid {
		return new Uuid(uuid());
	}

	constructor(value: string) {
		super(value);
		this.ensureIsValidUuid(value);
	}

	private ensureIsValidUuid(id: string) {
		if (!validate(id)) {
			throw new InvalidParamError(`<${this.constructor.name}>: Invalid value: ${id}`);
		}
	}
}
