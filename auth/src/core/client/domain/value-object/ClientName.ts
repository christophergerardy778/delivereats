import {ValueObject} from 'shared-layer';

export class ClientName extends ValueObject<string> {
	public static create(name: string): ClientName {
		return new ClientName(name);
	}
}
