import {type Client} from '../domain/Client';
import {type AllClientRepository} from '../domain/AllClientRepository';

export class CreateClient {
	constructor(private readonly repository: AllClientRepository) {
	}

	public run(client: Client) {}
}
