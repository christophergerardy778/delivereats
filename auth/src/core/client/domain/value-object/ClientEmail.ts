import {ValueObject} from 'shared-layer';

export class ClientEmail extends ValueObject<string> {
	public static create(email: string): ClientEmail {
		return new ClientEmail(email);
	}
}
