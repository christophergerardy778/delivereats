import {type Client} from '../../domain/Client';
import {type AllClientRepository} from '../../domain/AllClientRepository';
import {type SearchClientEmailAlreadyInUse} from '../search/SearchClientEmailAlreadyInUse';
import {ClientEmailAlreadyInUse} from '../../domain/error/ClientEmailAlreadyInUse';
import {inject, injectable} from 'inversify';
import {types} from '../../infrastructure/Types';
import {clientTypes} from '../../infrastructure/ClientTypes';

@injectable()
export class CreateClient {
	constructor(
		@inject(clientTypes.allClientsRepository)
		private readonly repository: AllClientRepository,

		@inject(clientTypes.searchClientEmailAlreadyInUse)
		private readonly searchClientEmailAlreadyInUse: SearchClientEmailAlreadyInUse) {}

	public async run(client: Client) {
		const isEmailAlreadyInUse = await this.searchClientEmailAlreadyInUse.run(client.email);

		if (isEmailAlreadyInUse) {
			throw new ClientEmailAlreadyInUse();
		}

		await this.saveClientInDb(client);
	}

	private async saveClientInDb(client: Client): Promise<void> {
		await this.repository.save(client);
	}
}
