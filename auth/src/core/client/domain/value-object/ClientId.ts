import {Uuid} from 'shared-layer';

export class ClientId extends Uuid {
	public static create(value: string): ClientId {
		return new ClientId(value);
	}
}
