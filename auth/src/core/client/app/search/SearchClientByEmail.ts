import {type AllClientRepository} from '../../domain/AllClientRepository';
import {type ClientEmail} from '../../domain/value-object/ClientEmail';
import {type Client} from '../../domain/Client';
import {ClientNotFoundError} from '../../domain/error/ClientNotFoundError';
import {inject, injectable} from 'inversify';
import {clientTypes} from '../../infrastructure/ClientTypes';

@injectable()
export class SearchClientByEmail {
	constructor(
		@inject(clientTypes.allClientsRepository) private readonly repository: AllClientRepository) {}

	public async run(clientEmail: ClientEmail): Promise<Client> {
		const client = await this.repository.findByEmail(clientEmail);

		if (!client) {
			throw new ClientNotFoundError();
		}

		return client;
	}
}
