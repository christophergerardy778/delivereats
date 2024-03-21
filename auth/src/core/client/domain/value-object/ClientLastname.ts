import {ValueObject} from 'shared-layer';

export class ClientLastname extends ValueObject<string> {
	public static create(lastname: string): ClientLastname {
		return new ClientLastname(lastname);
	}
}
