import {type AllClientRepository} from '../../domain/AllClientRepository';
import {type ClientEmail} from '../../domain/value-object/ClientEmail';
import {type Client} from '../../domain/Client';
import {ClientNotFoundError} from '../../domain/error/ClientNotFoundError';

export class SearchClientByEmail {
	constructor(private readonly repository: AllClientRepository) {}

	public async run(clientEmail: ClientEmail): Promise<Client> {
		const client = await this.repository.findByEmail(clientEmail);

		if (!client) {
			throw new ClientNotFoundError();
		}

		return client;
	}
}
