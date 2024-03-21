import {ValueObject} from 'shared-layer';

export class ClientImg extends ValueObject<string> {
	public static empty(): ClientImg {
		return new ClientImg('');
	}
}
