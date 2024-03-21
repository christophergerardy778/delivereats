import {ValueObject} from 'shared-layer';

export class ClientPassword extends ValueObject<string> {
	public static create(password: string): ClientPassword {
		return new ClientPassword(password);
	}
}
