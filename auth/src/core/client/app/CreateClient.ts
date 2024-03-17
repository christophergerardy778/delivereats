import {type Client} from '../domain/Client';
import {type ClientRepository} from '../domain/ClientRepository';

export class CreateClient {
	constructor(private readonly repository: ClientRepository) {
	}

	public run(client: Client) {}
}
