import {type Client} from '../../domain/Client';
import {type AllClientRepository} from '../../domain/AllClientRepository';
import {type SearchClientEmailAlreadyInUse} from '../search/SearchClientEmailAlreadyInUse';
import {ClientEmailAlreadyInUse} from '../../domain/error/ClientEmailAlreadyInUse';

export class CreateClient {
	constructor(
		private readonly repository: AllClientRepository,
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
