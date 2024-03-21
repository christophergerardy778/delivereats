import {ValueObject} from 'shared-layer';

export class ClientBirthday extends ValueObject<string> {
	public static create(birthday: string): ClientBirthday {
		return new ClientBirthday(birthday);
	}
}
